import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ChampionListComponent } from './champion-list/champion-list.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, Ng2SearchPipeModule],
  declarations: [ AppComponent, ChampionListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
