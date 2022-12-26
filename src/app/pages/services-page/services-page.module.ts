import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ServicesPageRoutingModule } from "./services-page-routing.module"
import { ServicesPageComponent } from "./components/services-page/services-page.component"
import { AppModule } from "../../app.module"

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [CommonModule, ServicesPageRoutingModule],
})
export class ServicesPageModule {}
