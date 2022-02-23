package com.gombi.potplayer.repositories;

import com.gombi.potplayer.models.entities.Word;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {
    ArrayList<Word> findAll();

    ArrayList<Word> findByTitle(String title);


    @Query(value = "SELECT * FROM dictionary_en_hun WHERE word1 = :word OR  word2 = :word LIMIT 1", nativeQuery = true)
    Optional<Word> searching(String word);


    //check this word is exist
    @Query(value = "SELECT * FROM dictionary_en_hun WHERE (word1 = :word OR  word2 = :word) AND title= :title LIMIT 1", nativeQuery = true)
    Optional<Word> checkWord(String word, String title);

    @Query(value = "SELECT title FROM dictionary_en_hun ORDER BY title", nativeQuery = true)
    HashSet<String> getAllSetByTitle();
}
