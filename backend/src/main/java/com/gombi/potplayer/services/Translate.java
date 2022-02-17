package com.gombi.potplayer.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class Translate {
    private String url = "https://libretranslate.de/translate";
    private RestTemplate restTemplate = new RestTemplate();

    protected String translateFromEnToHu(String word) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, String> requestJson = new HashMap<>();
        requestJson.put("q", word);
        requestJson.put("source", "en");
        requestJson.put("target", "hu");
        requestJson.put("format", "text");

        //build
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestJson, headers);
        // send POST request
        HashMap<String, String> response = restTemplate.postForObject(url, entity, HashMap.class);

        if (response.isEmpty() || !response.containsKey("translatedText")) {
            return "UNKNOWN";
        }
        return response.get("translatedText");
    }
}
