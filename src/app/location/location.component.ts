import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Output() myEvent= new EventEmitter();
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    
  onClick(min, max, location){
    var gold = this._dataService.generateGold(min, max);
    var summary = this._dataService.generateSummary(gold, location);
    this.myEvent.emit(this._dataService.getGoldCount());
  }

}
