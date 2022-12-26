import { Component, OnInit } from "@angular/core"
import { FooterLinks, SocialMedia } from "../../models/footer.model"
import { FOOTER_LINKS, SOCIAL_MEDIA } from "../../statics/footer.static"

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  footerLinks: FooterLinks[] = FOOTER_LINKS
  socialMedia: SocialMedia[] = SOCIAL_MEDIA

  constructor() {}

  ngOnInit(): void {}
}
