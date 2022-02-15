package com.gombi.potplayer.controllers;

import com.gombi.potplayer.services.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dictionary")
public class WordRestController {

    private final WordService wordService;

    @Autowired
    public WordRestController(WordService wordService) {
        this.wordService = wordService;
    }

    @PostMapping()
    public ResponseEntity<Object> saveANewWord(@RequestParam(name = "title", required = true) String title,
                                               @RequestParam(name = "word", required = true) String word) {

        return ResponseEntity.status(HttpStatus.CREATED).body(wordService.saveWord(title, word));
    }

}
