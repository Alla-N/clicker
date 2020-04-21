import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title: 'clicker';
  name = '';
  min = 5;
  max = 120;
  initial = true;
  inProgress = false;
  isEnd = false;
  timer = 10;
  timeLeft: number;
  interval;
  counter = 0;

  message: string;

  startTimer() {
    this.initial = false;
    this.inProgress = true;
    this.timeLeft = this.timer;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  game() {
    this.counter++;
  }
  stopTimer() {
    clearInterval(this.interval);
    this.inProgress = false;
    this.isEnd = true;
  }
  refresh() {
    this.initial = true;
    this.isEnd = false;
    this.counter = 0;
  }
  ngOnInit() {
    this.name = prompt('Hi! What is your name?');
  }

}
