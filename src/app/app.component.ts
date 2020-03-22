import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() {}

  listPlus: Array<string>;
  listS: Array<string>;
  listA: Array<string>;

  recievePlus($event){
    this.listPlus = $event;
  }
  recieveS($event){
    this.listS = $event;
  }
  recieveA($event){
    this.listA = $event;
  }

  
}
