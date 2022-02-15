package com.gombi.potplayer.services;

import com.gombi.potplayer.models.entities.Word;

import java.util.ArrayList;

public interface WordService {
    ArrayList<Word> showAll();

    Word saveWord(String title, String word);
}
