import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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

  listSplus: Array<string> = [];
  listS: Array<string> = [];
  listA: Array<string> = [];

  @Output() eventPlus = new EventEmitter<Array<string>>();
  @Output() eventS = new EventEmitter<Array<string>>();
  @Output() eventA = new EventEmitter<Array<string>>();

  constructor(private http: HttpClient) {}

  doUpdate(): void {
    this.loading = true;
    const apiURL = "../assets/data.json";
    console.log(apiURL);
    this.http.get(apiURL).subscribe((data: Array<any>) => {
      this.loading = false;
      this.champions = data[0].data;
      this.championList = Object.keys(this.champions);
      
    });
  }

  addChampion(champ, list): void{
    if (!list.includes(champ))
      list.push(champ);
  }

  sendPlus(){
    this.eventPlus.emit(this.listSplus);

  }
  sendS(){
    this.eventS.emit(this.listS);
  }
  sendA(){
    this.eventA.emit(this.listA);
  }

  ngOnInit() {}
}
