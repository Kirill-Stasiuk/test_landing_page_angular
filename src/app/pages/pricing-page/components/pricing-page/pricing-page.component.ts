import { Component, OnInit } from "@angular/core"
import { Pricing } from "../../../../shared/models/pricing.model"
import { PRICING_CARD } from "../../../../shared/statics/pricing.static"

@Component({
  selector: "app-pricing-page",
  templateUrl: "./pricing-page.component.html",
  styleUrls: ["./pricing-page.component.scss"],
})
export class PricingPageComponent implements OnInit {
  pricingCard: Pricing[] = PRICING_CARD

  constructor() {}

  ngOnInit(): void {}
}
