import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../services/game.service';
import UserData from '../services/game';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
 user: UserData;

  constructor(private router: Router, private gameService: GameService) {}

  restart() {
    this.router.navigate(['/start']);
  }
  exit() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.user = this.gameService.getUserData();
  }

}
