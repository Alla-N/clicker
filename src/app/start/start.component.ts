import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  min = 5;
  max = 120;
  timer = 10;

  constructor(private gameService: GameService, private router: Router) {}

  startGame() {
    this.gameService.saveGameTime(this.timer);
    this.router.navigate(['/game']);
  }

  exit() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }
}
