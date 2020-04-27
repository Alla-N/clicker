import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {MainComponent} from './main/main.component';
import {GameComponent} from './game/game.component';
import {ResultComponent} from './result/result.component';


const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
