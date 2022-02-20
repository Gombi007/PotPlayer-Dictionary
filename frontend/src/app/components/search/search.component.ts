import { Component, OnInit } from '@angular/core';
import { Word } from '../word.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   searchResult: Word;
   searchingThisWord: string;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  search() {   
    this.httpClient.get<any>('http://localhost:8080/api/dictionary/search/'+this.searchingThisWord)
      .subscribe(
        response => {         
            this.searchResult = response;
        });       
  }

}
