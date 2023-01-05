import { Component, OnInit } from "@angular/core"
import { HeaderNavLinks } from "../../models/header.model"
import { HEADER_NAV_LINKS, LANGUAGES } from "../../statics/header.static"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  headerNavLinks: HeaderNavLinks[] = HEADER_NAV_LINKS
  languagesOptions: string[] = LANGUAGES
  // @ts-ignore
  selectedLanguage: string = "en"

  openedMenuBurger = false
  isShowDropdown = false

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.openedMenuBurger = false
  }

  openBurger() {
    this.openedMenuBurger = !this.openedMenuBurger
  }

  openDropdown() {
    this.isShowDropdown = !this.isShowDropdown
  }

  setLanguage(language: string) {
    this.selectedLanguage = language
  }
}
