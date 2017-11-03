import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})
export class List2Page {

  private myData: any;
  public listDTFB: Array<any> = [];
  items: Array<{title: string}>;
  public newlistDTFB: Array<{name: string}>;

  constructor(public navCtrl: NavController) {
    
    this.listDTFB = JSON.parse('[{"name":"Turnier1"}]');

    this.newlistDTFB = [];
    this.newlistDTFB.push({name: this.listDTFB[0].name});

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i
      });
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
      setTimeout(() => {
        console.log('Async operation has ended');
        
        this.listDTFB = [];
        this.listDTFB = JSON.parse('[{"name":"Turnier1"}]');

        this.newlistDTFB = [];
        this.newlistDTFB.push({name: this.listDTFB[0].name});

        refresher.complete();
      }, 2000);
  }
}