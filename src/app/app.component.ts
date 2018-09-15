import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DropdownItem } from './shared/models/dropdownItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images: Array<any>;
  dropdownItems: Array<DropdownItem>;

  constructor(
    public http: HttpClient
  ) {
    this.images = new Array<string>();
  }

  ngOnInit() {

    this.http.get('assets/data/data.json').subscribe(
      (response: Array<DropdownItem>) => {
        this.dropdownItems = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete function');
      }
    );

    this.images.push({ id: 0, active: true, path: '../assets/img/title.png'});
    this.images.push({ id: 1, active: false, path: '../assets/img/family3.jpg'});
    this.images.push({ id: 2, active: false, path: '../assets/img/portigliolo2.jpg'});
  }

}
