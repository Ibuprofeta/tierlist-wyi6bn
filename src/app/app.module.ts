import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import{ TierListComponent} from './champion-tier-list/champion-tier-list.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,  AppRoutingModule],
  declarations: [ AppComponent, TierListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
