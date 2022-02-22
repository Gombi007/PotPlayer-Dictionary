CREATE DATABASE "dictionary";

CREATE TABLE "dictionary_en_hun"
(
id            SERIAL   NOT NULL,
title         VARCHAR  NOT NULL,
word1         VARCHAR  NOT NULL,
word2         VARCHAR  NOT NULL,
date          DATE     NOT NULL,
PRIMARY KEY (id)
);