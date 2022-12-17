import { Component, OnInit } from '@angular/core';
import { HeaderNavLinks } from '../../models/header.model';
import { HEADER_NAV_LINKS } from '../../statics/header.static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerNavLinks: HeaderNavLinks[] = HEADER_NAV_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
