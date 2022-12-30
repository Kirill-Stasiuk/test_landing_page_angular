import { Component, OnInit } from '@angular/core';
import {HeaderNavLinks, LanguagesOptions} from '../../models/header.model';
import {HEADER_NAV_LINKS, LANGUAGES_OPTIONS} from '../../statics/header.static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerNavLinks: HeaderNavLinks[] = HEADER_NAV_LINKS;
  languagesOptions: LanguagesOptions[] = LANGUAGES_OPTIONS;

  openedMenuBurger = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.openedMenuBurger = false;
  }

}
