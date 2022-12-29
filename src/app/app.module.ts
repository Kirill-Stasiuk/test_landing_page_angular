import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./shared/components/header/header.component"
import { FooterComponent } from "./shared/components/footer/footer.component"
import { PortfolioPageComponent } from "./pages/portfolio-page/components/portfolio-page/portfolio-page.component"
import { PricingPageComponent } from "./pages/pricing-page/components/pricing-page/pricing-page.component"
import { ButtonModule } from "./shared/components/button/button.module"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioPageComponent,
    PricingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
