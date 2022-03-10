import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SavedWordShowComponent } from './components/saved-word-show/saved-word-show.component';
import { SearchComponent } from './components/search/search.component';
import { ExportComponent } from './components/export/export.component';
import { SaveComponent } from './components/save/save.component';
import { MainComponent } from './components/main/main.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { RockPaperScissorsComponent } from './components/games/rock-paper-scissors/rock-paper-scissors.component';
import { GameContainerComponent } from './components/games/game-container/game-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavedWordShowComponent,
    SearchComponent,
    ExportComponent,
    SaveComponent,
    MainComponent,
    CollectionsComponent,
    RockPaperScissorsComponent,
    GameContainerComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
