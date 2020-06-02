import {Component} from '@angular/core';
import {GameService} from '@app/services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-game-scene></app-game-scene>
    <app-game-bar></app-game-bar>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public game: GameService) {
    this.game.init();
  }


}
