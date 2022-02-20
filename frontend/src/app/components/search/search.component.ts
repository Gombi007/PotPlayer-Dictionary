import { Component, OnInit } from '@angular/core';
import { Word } from '../word';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchResult:Word;
  public searchingThisWord:string;

  constructor() { }

  ngOnInit(): void {
  }

  search(gotWord:string) {
  
  }

}
