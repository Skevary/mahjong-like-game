import {Component, OnInit} from '@angular/core';
import {Card} from '@app/components/card.component';
import {GameService} from '@app/services/game.service';

@Component({
  selector: 'app-game-scene',
  template: `
    <div class="deck-container">
      <app-card
        *ngFor="let card of game.deck; trackBy: identify"
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

  identify(index, item: Card){
    return item.id; // bad idea (arr index)
  }

}


