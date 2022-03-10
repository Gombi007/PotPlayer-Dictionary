package com.gombi.potplayer.services;

import com.gombi.potplayer.models.entities.Word;

import java.util.ArrayList;
import java.util.HashSet;

public interface WordService {
    ArrayList<Word> showAll();

    Word saveWord(String title, String word);

    ArrayList<Word> getWordsByTitle(String title);

    Word search(String word);

    HashSet<String> getAllSetNameByTitle();

    void deleteWordFromSet(Long id);
}
