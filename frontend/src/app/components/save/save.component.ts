import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API } from '../api.enum';
import { Word } from '../word.model';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  newWord: Word = new Word();
  savedWord: Word = new Word();
  errorResponse: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saving() {
    this.savedWord = new Word();
    this.errorResponse= undefined;
    this.httpClient.get<any>(API.URL + '?title=' + this.newWord.title + '&word=' + this.newWord.word1)
      .subscribe({
        next: (value) => this.savedWord = value,
        error: (error) => this.errorResponse = error.error.Message
      });
  }

}
