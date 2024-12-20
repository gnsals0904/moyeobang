package com.ssafy.moyeobang.common.config.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter @Setter
@Component
@ConfigurationProperties("spring.jwt")
public class JwtProperties {

    private String secret;

    private String issuer;
}
