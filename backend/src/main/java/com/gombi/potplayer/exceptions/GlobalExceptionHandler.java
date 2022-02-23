package com.gombi.potplayer.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleNotFound(ResourceNotFoundException exception) {
        HashMap<String, String> messageMap = new HashMap<>();
        messageMap.put("Message", exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(messageMap);
    }

    @ExceptionHandler(ThisWordWasSavedException.class)
    public ResponseEntity<Object> handleSavedWord(ThisWordWasSavedException exception) {
        HashMap<String, String> messageMap = new HashMap<>();
        messageMap.put("Message", exception.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(messageMap);
    }
}
