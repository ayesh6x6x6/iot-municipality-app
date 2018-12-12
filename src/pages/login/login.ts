import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {
    username:'',
    password:'',
    email:''
  };

  constructor(public navCtrl: NavController, public http:HTTP,
    public loadingCtrl: LoadingController) {

  }

  onLogin(form:NgForm){
    if(form.valid){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Logging in...'
      });
      loading.present();
      this.http.post('http://192.168.1.128:3000/loginAttempt',this.user,{}).then(data=>{
        console.log(data.data);
        const response = JSON.parse(data.data);
        loading.dismiss();
        if(response.response == 'success'){
          this.navCtrl.setRoot(HomePage,{user:this.user.username});
        }        
      });
    }
  }

}
