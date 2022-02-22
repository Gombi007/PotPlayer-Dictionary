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


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  search() {   
    console.log(11);  
    this.httpClient.get<any>(API.URL+'/search/'+this.searchingThisWord)
      .subscribe(
        response => {         
            this.searchResult = response;
        });       
  }

}
