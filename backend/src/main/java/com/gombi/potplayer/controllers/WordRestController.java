package com.gombi.potplayer.controllers;

import com.gombi.potplayer.services.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dictionary")
@CrossOrigin(origins = "http://localhost:8080")
public class WordRestController {

    private final WordService wordService;

    @Autowired
    public WordRestController(WordService wordService) {
        this.wordService = wordService;
    }


    @GetMapping("/{title}")
    public ResponseEntity<Object> getWordsByTitle(@PathVariable String title) {
        return ResponseEntity.status(HttpStatus.OK).body(wordService.getWordsByTitle(title));
    }

    @GetMapping("/search/{word}")
    public ResponseEntity<Object> search(@PathVariable String word) {
        return ResponseEntity.status(HttpStatus.OK).body(wordService.search(word));
    }

    @GetMapping()
    public ResponseEntity<Object> saveANewWord(@RequestParam(name = "title", required = true) String title,
                                               @RequestParam(name = "word", required = true) String word) {
        return ResponseEntity.status(HttpStatus.CREATED).body(wordService.saveWord(title, word));
    }

}
