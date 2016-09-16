import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CommentPage } from '../../pages/comment/comment';

@Component({
  templateUrl: 'build/pages/playground/playground.html',
})
export class PlaygroundPage {

  constructor(public nav: NavController) {

  }

  addComment() {
    setTimeout(() => {
      this.nav.push(CommentPage);
    }, 500)
  }

}
