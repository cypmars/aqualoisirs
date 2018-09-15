import { Component, OnInit, Input } from '@angular/core';
import { DropdownItem } from '../../models/dropdownItem';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() dropdownItems: Array<DropdownItem>;

  constructor(

  ) {

  }

  ngOnInit() {

  }

  goToActivityPage(dropItemIndex: number, activityIndex?: number) {
    console.log('dropItemIndex: ', dropItemIndex, ', activityIndex: ', activityIndex);
  }

}
