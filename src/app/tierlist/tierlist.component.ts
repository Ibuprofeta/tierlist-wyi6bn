import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.css']
})
export class TierlistComponent implements OnInit {
  loading = false;
  @Input() listSplus: Array<string> = [];
  @Input() listS: Array<string> = [];
  @Input() listA: Array<string> = [];

  constructor() { 
    
  }
  addPrint(): void{
    console.log(this.listSplus);
  }

  ngOnInit() {
    
  }

}