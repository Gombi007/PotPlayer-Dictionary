package com.gombi.potplayer.repositories;

import com.gombi.potplayer.models.entities.Word;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {
    ArrayList<Word> findAll();

    ArrayList<Word> findByTitle(String title);
}
