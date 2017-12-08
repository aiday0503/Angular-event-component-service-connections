import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  summary:Array<string> = [];

  constructor(private _dataService: DataService) { }
  populate(){
    this.summary = this._dataService.getSummary();
  }

  ngOnInit() {
    this.populate();
  }


}
