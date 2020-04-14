import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Components
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { TierlistComponent } from './tierlist/tierlist.component';
import { ConfigService } from './config.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    // searching module
    Ng2SearchPipeModule],
  declarations: [ 
    AppComponent, 
    ChampionListComponent, 
    TierlistComponent],
  bootstrap:    [ 
    AppComponent ],
  providers: [ConfigService],
})

export class AppModule { }
