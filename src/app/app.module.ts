import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Components
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { TierlistComponent } from './tierlist/tierlist.component';

// firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    // searching module
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBbuURxazBGWu0NpPO0Pr4fp5428UKvcfc",
        authDomain: "tierlist-4f02b.firebaseapp.com",
        databaseURL: "https://tierlist-4f02b.firebaseio.com",
        projectId: "tierlist-4f02b",
        storageBucket: "tierlist-4f02b.appspot.com",
        messagingSenderId: "572906626654",
        appId: "1:572906626654:web:c898ffd0657ca1daab9ecf",
        measurementId: "G-RM5PDW0QJM"
      }
    )
  ],
  declarations: [ 
    AppComponent, 
    ChampionListComponent, 
    TierlistComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticationService],
})
export class AppModule { }
