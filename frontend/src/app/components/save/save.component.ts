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

  inputTitleValidationFailed: boolean;
  inputEnglishWordValidationFailed: boolean;
  placeholderTitle:string='Title';
  placeholderEnglishWord:string='English word';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saving() {
    this.savedWord = new Word();
    this.errorResponse = undefined;

    if (this.formValidate()) {
      this.httpClient.get<any>(API.URL + '?title=' + this.newWord.title + '&word=' + this.newWord.word1)
        .subscribe({
          next: (value) => this.savedWord = value,
          error: (error) => this.errorResponse = error.error.Message
        });
    }
  }

  formValidate() {
    this.inputTitleValidationFailed = false;
    this.inputEnglishWordValidationFailed = false;

    let actualTitle: string = this.newWord.title;
    let actualEnglishWord: string = this.newWord.word1;

    //title validation
    if (actualTitle == undefined || actualTitle.length <= 1 || !isNaN(Number(actualTitle))) {
      this.inputTitleValidationFailed = true;
      this.placeholderTitle = 'Must be a min. 2 length text';
      return false;
    }
    //English word validation
    if (actualEnglishWord === undefined || actualEnglishWord.length <= 1 ||!isNaN(Number(actualEnglishWord))) {
      this.inputEnglishWordValidationFailed = true;
      this.placeholderEnglishWord = 'Must be a min. 2 length text';
      return false;
    }
    return true;
  }

}
