export class Word {
    id: number;
    title: string;
    word1: string;
    word2: string;
    date: string;

    constructor(id: number, title: string, word1: string, word2: string, date: string) {
        this.id = id;
        this.title = title;
        this.word1 = word1;
        this.word2 = word2;
        this.date = date;
    }
}