package com.ssafy.moyeobang.common.config;

import com.ssafy.moyeobang.common.config.jwt.TokenManager;
import com.ssafy.moyeobang.common.config.oauth.MemberRepositoryInOAuth;
import com.ssafy.moyeobang.common.config.oauth.OAuth2CustomService;
import com.ssafy.moyeobang.common.config.oauth.OAuth2SuccessHandler;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final OAuth2CustomService oAuth2CustomService;

    private final MemberRepositoryInOAuth memberRepository;

    private final TokenManager tokenManager;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors(corsConfigurer -> corsConfigurer.configurationSource(apiConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
                .headers(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)
                .httpBasic(AbstractHttpConfigurer::disable)
                .csrf(AbstractHttpConfigurer::disable)
                .logout(AbstractHttpConfigurer::disable)
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // RESTful API를 위한 STATELESS
                )
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/**").permitAll()
                )
                .oauth2Login(
                        auth -> auth.loginPage("/login")
                                .authorizationEndpoint(
                                        endpoint -> endpoint
                                                .baseUri("/oauth2/authorization")
                                )
                                .userInfoEndpoint(
                                        endpoint -> endpoint.userService(oAuth2CustomService))
                                .successHandler(oAuth2SuccessHandler())
                )
                .build();
    }

    private CorsConfigurationSource apiConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setMaxAge(86400L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    public OAuth2SuccessHandler oAuth2SuccessHandler() {

        return new OAuth2SuccessHandler(
                memberRepository,
                tokenManager
        );
    }
}