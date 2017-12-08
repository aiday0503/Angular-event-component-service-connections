import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LocationComponent } from './location/location.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  goldCount:number=0;
  color:string="black";
  constructor(private _dataService: DataService){}
  getCount(){
    this.goldCount = this._dataService.getGoldCount();
  }
  ifPos(){
    if(this.goldCount<0){
      this.color="red";
    }
    else if(this.goldCount>=0){
      this.color="black";
    }
  }

  dataFromChild(eventData){
    this.goldCount=eventData;
    this.ifPos();
  }
  ngOnInit(){
    this.getCount();
  }
}
