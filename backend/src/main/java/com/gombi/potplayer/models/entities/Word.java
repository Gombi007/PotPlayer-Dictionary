package com.gombi.potplayer.models.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "dictionary")
public class Word extends BusinessObject {
    private String title;
    private String word1;
    private String word2;
    private LocalDate date;

    public Word() {
    }

    public Word(String title, String word1, String word2, LocalDate date) {
        this.title = title;
        this.word1 = word1;
        this.word2 = word2;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWord1() {
        return word1;
    }

    public void setWord1(String word1) {
        this.word1 = word1;
    }

    public String getWord2() {
        return word2;
    }

    public void setWord2(String word2) {
        this.word2 = word2;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
