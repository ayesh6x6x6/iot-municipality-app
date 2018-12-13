import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { connect, Client } from 'mqtt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  client:Client;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.client = connect('mqtt://broker.hivemq.com/mqtt',{port:8000});
    this.client.subscribe('bins/alerts/#');
    this.client.on('message',(topic:string,payload:string)=>{
      const stat = JSON.parse(payload);
      let alert = this.alertCtrl.create({
        title: `Bin ${stat.bin} is ${stat.status}`,
        subTitle: "Please send municipality trucks to clear out the area!"
      });
      alert.present();
    });
  }

}
