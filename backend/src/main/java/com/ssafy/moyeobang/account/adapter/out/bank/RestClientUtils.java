package com.ssafy.moyeobang.account.adapter.out.bank;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.client.RestClient;

abstract class RestClientUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    public static JsonNode post(String uri, Object request) {
        try {
            String responseBody = restClient().post()
                    .uri(uri)
                    .contentType(APPLICATION_JSON)
                    .body(request)
                    .retrieve()
                    .body(String.class);

            return MAPPER.readTree(responseBody);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    private static RestClient restClient() {
        return RestClient.builder()
                .baseUrl("https://finopenapi.ssafy.io/ssafy/api/v1/edu")
                .build();
    }
}