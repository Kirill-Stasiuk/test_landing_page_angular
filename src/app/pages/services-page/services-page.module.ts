import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ServicesPageRoutingModule } from "./services-page-routing.module"
import { ServicesPageComponent } from "./components/services-page/services-page.component"
import { ButtonModule } from "../../shared/components/button/button.module"
import { ServiceListModule } from "../../shared/components/service-list/service-list.module"

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    ButtonModule,
    ServiceListModule,
  ],
})
export class ServicesPageModule {}
