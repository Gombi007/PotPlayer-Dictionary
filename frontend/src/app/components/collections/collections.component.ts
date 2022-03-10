import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { API } from '../api.enum';
import { Word } from '../word.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  allSet: string[];
  allSetUppercase: string[];
  errorResponse: string;
  selectedCard: string;
  wordsByTitle: string[];
  clickedBtnId: number;
  //update
  updateBtnWasPressed: boolean;
  selectedRow: Word = new Word;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllSet();
  }

  getAllSet() {
    this.httpClient.get<any>(API.URL + '/search/title/all')
      .subscribe({
        next: (value) => this.allSet = value,
        error: (error) => this.errorResponse = error.error.Message,
        complete: () => this.uppercaseAllset()
      });
  }

  uppercaseAllset() {
    this.allSetUppercase = this.allSet.map(title => {
      return title.toUpperCase()
    })
  }


  showWordInSelectedTitle(id: number, set: string) {
    this.clickedBtnId = id;
    this.showWordsByTitle(set);
  }

  showWordsByTitle(title: string) {
    this.httpClient.get<any>(API.URL + '/search/title/' + title)
      .subscribe({
        next: (response) => this.wordsByTitle = response
      });

  }

  //update a row
  btnUpdate(wordRow: Word) {
    this.updateBtnWasPressed = !this.updateBtnWasPressed;
    this.selectedRow = wordRow;
  }

  btnDelete(){

  }

}
