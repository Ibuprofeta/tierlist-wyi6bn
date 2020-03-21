import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'TierList';
  loading = false;
  champions: Array<any> = [];
  championList: Array<string> = [];
  solochampion : Array<any> = [];

  constructor(private http: HttpClient){}

  // doChampionSearch(term: string): void{
  //   if (term){
  //     this.loading = true;
  //     let championURL = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/'+ term + '.json';

  //     this.http.get(championURL).subscribe(
  //       (data: Array<any>) => {
  //         this.loading = false;
  //         this.solochampion = data;
  //       }
  //     );
  //   }
  //   else {this.solochampion = []}
  // }

  doSearch(): void{
    this.loading = true;
    const apiURL = 'assets/data.json';
    this.http.get(apiURL).subscribe(
        (data: Array<any>) => {
          this.loading = false;
          this.champions = data[0].data;
          this.championList = Object.keys(this.champions);
          console.log(this.champions[this.championList[0]]);
        }
    );
  }
}
