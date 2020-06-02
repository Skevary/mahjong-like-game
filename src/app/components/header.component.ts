import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <span class="title">{{title}}</span>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mahjong-like-game';

  constructor() {
  }

  ngOnInit() {
  }

}
