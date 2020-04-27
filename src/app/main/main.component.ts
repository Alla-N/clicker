import {Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnInit {
  title: 'app';
  name: string;
  constructor(private gameService: GameService, private router: Router) {}

  start(){
    this.gameService.saveUserName(this.name);
    this.router.navigate(['/start']);
  }

  ngOnInit() {
  }

}
