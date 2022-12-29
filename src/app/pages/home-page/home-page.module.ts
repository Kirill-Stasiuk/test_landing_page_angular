import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HomePageRoutingModule } from "./home-page-routing.module"
import { HomePageComponent } from "./components/home-page/home-page.component"
import { ButtonModule } from "../../shared/components/button/button.module"
import { AboutModule } from "../../shared/components/about/about.module"
import { ContactModule } from "../../shared/components/contact/contact.module"

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ButtonModule,
    AboutModule,
    ContactModule,
  ],
})
export class HomePageModule {}
