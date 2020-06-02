import {Component, OnInit} from '@angular/core';
import {GameService} from '@app/services/game.service';

@Component({
  selector: 'app-game-bar',
  template: `
    <button (click)="game.init()">
      Restart Game
    </button>
  `,
  styleUrls: ['./game-bar.component.scss']
})
export class GameBarComponent implements OnInit {

  constructor(public game: GameService) {
  }

  ngOnInit(): void {
  }

}
