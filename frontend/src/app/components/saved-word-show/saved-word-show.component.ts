import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API } from '../api.enum';
import { Word } from '../word.model';

@Component({
  selector: 'app-saved-word-show',
  templateUrl: './saved-word-show.component.html',
  styleUrls: ['./saved-word-show.component.css']
})

export class SavedWordShowComponent implements OnInit {

  title: string;
  word: string;
  wordsByTitle: string[];
  errorResponse: string;
  actualCollectionTitle: string;
  savedWord: Word = new Word();
  queryparamsValidateOk: boolean;
  queryparamFailedText:string;
  

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      this.errorResponse = '-';
      this.savedWord.word2 = undefined;
      this.title = value.get('title');
      this.word = value.get('word');
      this.validateQueryparams();    

      if (this.queryparamsValidateOk) {
        this.translate();
        this.showWordsByTitle();
      }
    });

  }

  translate() {
    this.httpClient.get<any>(API.URL + '?title=' + this.title + '&word=' + this.word)
      .subscribe({
        next: (value) => this.savedWord = value,
        error: (error) => this.errorResponse = error.error.Message
      });
  }

  showWordsByTitle() {
    this.title = this.title.toUpperCase();
    this.httpClient.get<any>(API.URL + '/' + this.title)
      .subscribe(
        response => {
          this.wordsByTitle = response;
        });

  }

  validateQueryparams() {
    this.queryparamsValidateOk = false;
    
    if (this.title === undefined || this.title.length <= 1 || !isNaN(Number(this.title))) {        
      this.queryparamsValidateOk = false;     
      this.queryparamFailedText = 'Title must be a min. 2 length text';
      return false;     
    }
    if (this.word === undefined || this.word.length <= 1 || !isNaN(Number(this.word))) {
      this.queryparamsValidateOk = false;
      this.queryparamFailedText = 'English word must be a min. 2 length text';
      return false;

    }      
     this.queryparamsValidateOk = true;
     return true;
    } 

}
