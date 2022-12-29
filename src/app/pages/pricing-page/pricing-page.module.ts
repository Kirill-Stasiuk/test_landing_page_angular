import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { PricingPageRoutingModule } from "./pricing-page-routing.module"
import { PricingPageComponent } from "./components/pricing-page/pricing-page.component"
import { ButtonModule } from "../../shared/components/button/button.module"

@NgModule({
  declarations: [PricingPageComponent],
  imports: [CommonModule, PricingPageRoutingModule, ButtonModule],
  exports: [PricingPageComponent],
})
export class PricingPageModule {}
