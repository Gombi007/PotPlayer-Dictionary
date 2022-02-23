package com.gombi.potplayer.exceptions;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleNotFound(ResourceNotFoundException exception){
        HashMap<String, String> messageMap = new HashMap<>();
        messageMap.put("Message", exception.getMessage());

        //ToDo Test this json convert that it is necessary here
        Gson gson = new Gson();
        String result = gson.toJson(messageMap);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(result);
    }
}
