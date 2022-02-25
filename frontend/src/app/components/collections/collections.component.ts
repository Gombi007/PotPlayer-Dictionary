import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { API } from '../api.enum';

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

  showWordsByTitle(title: string) {
    this.httpClient.get<any>(API.URL + '/search/title/' + title)
      .subscribe(
        response => {
          this.wordsByTitle = response;
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

}
