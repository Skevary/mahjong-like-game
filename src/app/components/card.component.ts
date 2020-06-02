import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

export interface Card {
  id: number;
  value: number;
  isFlipped: boolean;
  canBeFlipped: boolean;
}

@Component({
  selector: 'app-card',
  template: `
    <div class="card"
         [class.flipped]="item.isFlipped"
         [class.pointer]="item.canBeFlipped">
      <div class="front"></div>
      <div class="back">{{item.value}}</div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Card;
  @Output() flip = new EventEmitter<Card>();

  @HostListener('click')
  onClick() {
    this.item.canBeFlipped
    && !this.item.isFlipped
    && this.flip.emit(this.item);
  }

  constructor() {
  }

  ngOnInit() {
  }


}
