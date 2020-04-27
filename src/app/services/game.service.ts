import { Injectable } from '@angular/core';
import UserData from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private user: UserData = {
    userName: '',
    gameTime: 0,
    gameResult: 0,
  };
  saveUserName(name: string) {
      this.user.userName = name;
  }

  saveGameTime(time: number) {
    this.user.gameTime = time;
  }

  saveGameResult(counter: number) {
    this.user.gameResult = counter;
  }


  getUserData(): UserData {
    return this.user;
  }
}
