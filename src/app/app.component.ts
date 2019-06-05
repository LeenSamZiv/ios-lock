import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notifications: Notification[];
  switches: string[];
  tools: string[];

  constructor() {
    this.notifications = [
      {
        name: 'Tumblr', icon: 'logo-tumblr',
        date: new Date(new Date().getTime() - 60 * 1 * 1000),
        title: 'attention', content: 'There is no more things that you want'
      },
      {
        name: 'Apple', icon: 'logo-apple',
        date: new Date(new Date().getTime() - 60 * 11 * 1000),
        title: 'price reduction',
        content: 'now is 50% off,We\'re going to go bankrupt If you don\'t buy anything'
      },
      {
        name: 'Twitter', icon: 'logo-twitter',
        date: new Date(new Date().getTime() - 60 * 19 * 1000),
        title: 'good news', content: 'You got new fans'
      },
      {
        name: 'Google', icon: 'logo-google',
        date: new Date(new Date().getTime() - 60 * 95 * 1000),
        title: 'Oops', content: 'Can you guys hear me?'
      },
    ];
    this.switches = [
      'airplane',
      'wifi-dark',
      'bluetooth',
      'moon',
      'navigate',
    ];
    this.tools = [
      'flashlight',
      'compass',
      'calculator',
      'camera',
    ];
  }

  getNowDateTime() {
    return new Date();
  }
}

export class Notification {
  name: string;
  icon: string;
  date: Date;
  title: string;
  content: string;
}
