import {Injectable} from '@angular/core';
import {Card} from '../components/card.component';
import {getPrimesWithPair} from '../utility';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  stamp: any;
  deck: Card[];
  prevCard: Card;

  constructor() {
  }

  init() {
    this.stamp = 0;
    this.deck = this.getNewDeck();
    this.cardsShowPreview(3000);
    this.prevCard = null;
  }

  getNewDeck() {
    return getPrimesWithPair(50)
      .map((value, index) => ({
        value,
        id: index,
        isFlipped: true,
        canBeFlipped: false
      }));
  }

  cardsShowPreview(ms = 3000) {
    !!this.stamp && clearTimeout(this.stamp);
    this.stamp = setTimeout(() => this.deck.forEach(card => {
      card.isFlipped = false;
      card.canBeFlipped = true;
    }), ms);
  }

  checkConditionOfPair(card: Card) {
    card.isFlipped = true;

    if (!this.prevCard) {
      this.prevCard = card;
      return;
    }

    if (this.prevCard.value === card.value) {
      card.canBeFlipped = false;
      this.prevCard.canBeFlipped = false;
    } else {
      const prevCardId = this.prevCard.id;
      this.stamp = setTimeout(() => {
        card.isFlipped = false;
        this.deck[prevCardId].isFlipped = false;
      }, 1000);
    }

    this.prevCard = null;
  }
}
