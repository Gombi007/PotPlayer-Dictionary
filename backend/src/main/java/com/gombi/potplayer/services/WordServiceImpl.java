package com.gombi.potplayer.services;

import com.gombi.potplayer.exceptions.ResourceNotFoundException;
import com.gombi.potplayer.exceptions.ThisWordWasSavedException;
import com.gombi.potplayer.models.entities.Word;
import com.gombi.potplayer.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
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
        title = title.toLowerCase(Locale.ROOT);
        word = word.toLowerCase(Locale.ROOT);
        boolean isExistingWordInThisTitle = wordRepository.checkWord(word, title).isPresent();
        if (isExistingWordInThisTitle) {
            throw new ThisWordWasSavedException("This word \"" + word + "\" was already saved in this set \"" + title + "\"");
        }

        String translatedWord = "";
        if (!word.isEmpty() && !title.isEmpty()) {
            translatedWord = translate.translateFromEnToHu(word);
        }
        word = word.toLowerCase(Locale.ROOT);
        title = title.toLowerCase(Locale.ROOT);
        translatedWord = translatedWord.toLowerCase(Locale.ROOT);

        LocalDate localDate = LocalDate.now();
        Word saveThisWord = new Word(title, word, translatedWord, localDate);
        return wordRepository.save(saveThisWord);

    }

    @Override
    public ArrayList<Word> getWordsByTitle(String title) {
        title = title.toLowerCase(Locale.ROOT);
        boolean isEmptySet = wordRepository.findByTitle(title).isEmpty();
        if (isEmptySet) {
            throw new ResourceNotFoundException("There is no saved word in this set \"" + title + "\"");
        }
        return wordRepository.findByTitle(title);
    }

    @Override
    public Word search(String word) {
        word = word.toLowerCase(Locale.ROOT);
        boolean isPresentWord = wordRepository.searching(word).isPresent();
        if (!isPresentWord) {
            throw new ResourceNotFoundException("There is no such word saved yet \"" + word + "\"");
        }
        return wordRepository.searching(word).get();
    }

    public HashSet<String> getAllSetNameByTitle() {
        boolean isEmptyDatabase = wordRepository.getAllSetByTitle().isEmpty();
        if (isEmptyDatabase) {
            throw new ResourceNotFoundException("There is no saved set in the database");
        }
        wordRepository.getAllSetByTitle().forEach(a -> System.out.println(a));
        return wordRepository.getAllSetByTitle();
    }

}
