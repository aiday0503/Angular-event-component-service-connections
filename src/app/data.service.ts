import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private goldCount: number = 0;
  private summary: Array<string>=[];
  constructor() { }
  getGoldCount() {
    return this.goldCount;
  }
  generateGold(min, max) {
    var gold:number = Math.floor(Math.random()*(max-min+1))+min;
    this.goldCount += gold;
    return gold;
  }
  generateSummary(gold, location){
    var str:string="";
    if(gold>=0){
      str = 'Earned '+ gold +' gold  from ' + location;
    }
    if(gold<0){
      str = 'Lost '+ Math.abs(gold) +' gold from ' + location;
    }
    this.summary.push(str);
  }
  getSummary(){
    return this.summary;
  }
}
