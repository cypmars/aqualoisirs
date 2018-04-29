import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images: Array<string>;

  constructor(config: NgbCarouselConfig){
    config.interval = 3000;
    config.keyboard = false;

    this.images = new Array<string>()
  }

  ngOnInit(){
    this.images.push('../assets/img/title.png');
    this.images.push('../assets/img/family3.jpg');
    this.images.push('../assets/img/portigliolo2.jpg');
  }

}
