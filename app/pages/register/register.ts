import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {

  constructor(public nav: NavController) {

  }

  openLoginPage(event) {
    event.preventDefault();

    this.nav.push(LoginPage);
  }
}
