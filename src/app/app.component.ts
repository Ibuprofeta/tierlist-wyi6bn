import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'TierList';
  searchText;
  loading = false;
  champions: Array<any> = [];
  championList: Array<string> = [];

  constructor(private http: HttpClient){}

  doUpdate(): void{
    this.loading = true;
    const apiURL = 'assets/data.json';
    this.http.get(apiURL).subscribe(
        (data: Array<any>) => {
          this.loading = false;
          this.champions = data[0].data;
          this.championList = Object.keys(this.champions);
          
        }
    );
  }

  
}
