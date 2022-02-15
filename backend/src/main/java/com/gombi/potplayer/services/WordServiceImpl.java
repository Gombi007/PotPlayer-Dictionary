package com.gombi.potplayer.services;

import com.gombi.potplayer.models.entities.Word;
import com.gombi.potplayer.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
public class WordServiceImpl implements WordService {
    private final WordRepository wordRepository;

    @Autowired
    public WordServiceImpl(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    @Override
    public ArrayList<Word> showAll() {
        return null;
    }

    @Override
    public Word saveWord(String title, String word) {
        LocalDate localDate = LocalDate.now();
        System.out.println(localDate);
        Word saveThisWord = new Word(title, word, "unkown", localDate);
        wordRepository.save(saveThisWord);
        return null;
    }
}
