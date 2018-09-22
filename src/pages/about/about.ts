import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public values;

  constructor(public navCtrl: NavController, public http: DataProvider) {

  }

  ionViewWillEnter(){
    this.http.Get('values').subscribe(result => {
      console.log(result);
      this.values = result;
    });
  }

}
