import { Component } from '@angular/core';
import { NavController, MenuController, Slides } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  menu: any;
  slideOptions = {
    pager: true
  };

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menu = menuCtrl;
    this.menu.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    //what do you wish to do? Add you codes here
  }

  nextPage(){
    this.navCtrl.push(LoginPage);
  }

}
