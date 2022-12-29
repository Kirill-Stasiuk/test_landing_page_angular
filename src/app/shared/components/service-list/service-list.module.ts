import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ServiceListComponent } from "./service-list.component"

@NgModule({
  declarations: [ServiceListComponent],
  imports: [CommonModule],
  exports: [ServiceListComponent],
})
export class ServiceListModule {}
