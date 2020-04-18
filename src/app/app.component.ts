import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  name = '';
  isStart = false;
  isEnd = false;
  timer = 10;
  timeLeft: number;
  interval;
  counter = 0;

  message: string;

  startTimer() {
    this.isStart = true;
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
    this.isEnd = true;
  }
  refresh() {
    this.isStart = false;
    this.isEnd = false;
  }
  ngOnInit() {
    this.name = prompt('Hi! What is your name?');
  }

}
