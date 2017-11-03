import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i
      });
    }
  }

  doRefresh(refresher) {

    setTimeout(() => {
      console.log('Async operation has ended');

      refresher.complete();
    }, 2000);

  }

}
