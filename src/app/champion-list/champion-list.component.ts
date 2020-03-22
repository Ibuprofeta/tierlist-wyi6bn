import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-champion-list",
  templateUrl: "./champion-list.component.html",
  styleUrls: ["./champion-list.component.css"]
})
export class ChampionListComponent implements OnInit {
  name = "ChampionList";
  searchText;
  loading = false;
  champions: Array<any> = [];
  championList: Array<string> = [];

  constructor(private http: HttpClient) {}

  doUpdate(): void {
    this.loading = true;
    const apiURL = "assets/data.json";
    this.http.get(apiURL).subscribe((data: Array<any>) => {
      this.loading = false;
      this.champions = data[0].data;
      console.log(this.champions);
      this.championList = Object.keys(this.champions);
      console.log(this.championList);
    });
  }

  ngOnInit() {}
}
