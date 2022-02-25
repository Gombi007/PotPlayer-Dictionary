import { Component, OnInit } from '@angular/core';
import { Word } from '../word.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../api.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: Word;
  searchingThisWord: string;
  errorResponse: string;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    this.searchResult= undefined;
    this.errorResponse= undefined;
    this.httpClient.get<any>(API.URL + '/search/word/' + this.searchingThisWord)
      .subscribe({
        next: (value)=> this.searchResult = value,
        error: (error)=>this.errorResponse=error.error.Message
      });
  }

}
