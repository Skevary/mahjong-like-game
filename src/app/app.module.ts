import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '@app/app.component';
import {CardComponent} from '@app/components/card.component';
import {GameSceneComponent} from '@app/components/game-scene.component';
import { HeaderComponent } from '@app/components/header.component';
import { GameBarComponent } from '@app/components/game-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameSceneComponent,
    HeaderComponent,
    GameBarComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
