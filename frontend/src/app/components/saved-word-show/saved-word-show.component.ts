import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-word-show',
  templateUrl: './saved-word-show.component.html',
  styleUrls: ['./saved-word-show.component.css']
})

export class SavedWordShowComponent implements OnInit {

  public title: string;
  public word: string;
  public translatedWord: string;
  public date: string;
  public wordsByTitle: string[];
  private id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      value.title == '' ? '' : this.title = value.title;
      value.word == '' ? '' : this.word = value.word;
      this.id++;
      if (this.id === 2) {
        this.translate();
        this.showWordsByTitle();    
      }
    });
  }

  translate() {
    this.httpClient.get<any>('http://localhost:8080/api/dictionary?title=' + this.title + '&word=' + this.word)
      .subscribe(
        response => {
          this.translatedWord = response.word2;
          this.date = response.date;
        });
  }

  showWordsByTitle() {
    this.httpClient.get<any>('http://localhost:8080/api/dictionary/' + this.title)
      .subscribe(
        response => {
          this.wordsByTitle = response;
          console.log(response);
        });
  }

}
