package com.ssafy.moyeobang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class MoYeoBangApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoYeoBangApplication.class, args);
    }

}