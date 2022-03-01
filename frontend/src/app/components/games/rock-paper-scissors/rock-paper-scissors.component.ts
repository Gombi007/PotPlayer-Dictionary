import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css']
})
export class RockPaperScissorsComponent implements OnInit {
  userChoice: string = '';
  computerChoice: string = '';
  result: string = '';
  wait: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  getClickedkdBtn(event: any) {
    this.userChoice = '';
    this.computerChoice = '';
    this.result = '';
    this.wait = true;
    setTimeout(
      () => {
        let choosenWord = event.target.id.toUpperCase();
        this.userChoice = choosenWord;
        this.generateComputerChoice();
        this.getResult();
        this.wait = false;
      }, 1000);
  }

  generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1: this.computerChoice = 'ROCK';
        break;
      case 2: this.computerChoice = 'PAPER';
        break;
      case 3: this.computerChoice = 'SCISSORS';
        break;
    }
  }

  getResult() {
    if (this.computerChoice === this.userChoice) {
      this.result = 'It\'s a draw';
    }
    if (this.computerChoice === 'ROCK' && this.userChoice === 'PAPER') {
      this.result = 'You win!';
    }
    if (this.computerChoice === 'ROCK' && this.userChoice === 'SCISSORS') {
      this.result = 'You lost!';
    }
    if (this.computerChoice === 'PAPER' && this.userChoice === 'SCISSORS') {
      this.result = 'You win!';
    }
    if (this.computerChoice === 'PAPER' && this.userChoice === 'ROCK') {
      this.result = 'You lost!';
    }
    if (this.computerChoice === 'SCISSORS' && this.userChoice === 'ROCK') {
      this.result = 'You win!';
    }
    if (this.computerChoice === 'SCISSORS' && this.userChoice === 'PAPER') {
      this.result = 'You lost!';
    }

  }






}
