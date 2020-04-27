import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  min = 5;
  max = 120;
  timer: number;
  timeLeft = this.timer;
  interval;
  counter = 0;

  constructor(private gameService: GameService, private router: Router) {
      this.timer = this.gameService.getUserData().gameTime;
  }

  startTimer() {
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
    this.gameService.saveGameResult(this.counter);
    clearInterval(this.interval);
    this.router.navigate(['/result']);
  }

  ngOnInit(): void {
    this.startTimer();
}

}
