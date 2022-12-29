import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HomePageRoutingModule } from "./home-page-routing.module"
import { HomePageComponent } from "./components/home-page/home-page.component"
import { AppModule } from "../../app.module"
import { ButtonModule } from "../../shared/components/button/button.module"

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, ButtonModule],
})
export class HomePageModule {}
