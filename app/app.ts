import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, ionicBootstrap, Platform } from 'ionic-angular';
import {HTTP_PROVIDERS} from '@angular/http';
import { StatusBar } from 'ionic-native';

import { RegisterPage } from './pages/register/register';
import { CommentPage } from './pages/comment/comment';
import { PlaygroundPage } from './pages/playground/playground';

@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = RegisterPage;

  constructor(public platform: Platform, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page): void {
    this.menu.close();
    this.nav.setRoot(page);
  }

  logout() {

  }
}

ionicBootstrap(MyApp, [HTTP_PROVIDERS, ], {
  backButtonText: '뒤로 가기',
  statusbarPadding: true
});
