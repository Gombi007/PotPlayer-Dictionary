package com.gombi.potplayer.services;

import com.gombi.potplayer.models.entities.Word;
import com.gombi.potplayer.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Locale;

@Service
public class WordServiceImpl implements WordService {
    private final WordRepository wordRepository;
    private final Translate translate;

    @Autowired
    public WordServiceImpl(WordRepository wordRepository, Translate translate) {
        this.wordRepository = wordRepository;
        this.translate = translate;
    }

    @Override
    public ArrayList<Word> showAll() {
        return null;
    }

    @Override
    @Transactional
    public Word saveWord(String title, String word) {
        boolean isExistingWordInThisTitle = wordRepository.checkWord(word, title).isPresent();
        if (isExistingWordInThisTitle) {
            throw new RuntimeException("this is an existing word in this title");
        }

        String translatedWord = "";
        if (!word.isEmpty() && !title.isEmpty()) {
            translatedWord = translate.translateFromEnToHu(word);
        }
        word = word.toLowerCase(Locale.ROOT);
        translatedWord = translatedWord.toLowerCase(Locale.ROOT);

        LocalDate localDate = LocalDate.now();
        Word saveThisWord = new Word(title, word, translatedWord, localDate);
        return wordRepository.save(saveThisWord);

    }

    @Override
    public ArrayList<Word> getWordsByTitle(String title) {
        return wordRepository.findByTitle(title);
    }

    @Override
    public Word search(String word) {
        return wordRepository.searching(word);
    }

}
