import {Component, OnInit} from '@angular/core';
import {GameService} from '@app/services/game.service';

@Component({
  selector: 'app-game-scene',
  template: `
    <div class="deck-container">
      <app-card
        *ngFor="let card of game.deck"
        [item]="card"
        (flip)="game.checkConditionOfPair($event)"
      ></app-card>
    </div>
  `,
  styleUrls: ['./game-scene.component.scss']
})
export class GameSceneComponent implements OnInit {

  constructor(public game: GameService) {
  }

  ngOnInit() {
  }

}


