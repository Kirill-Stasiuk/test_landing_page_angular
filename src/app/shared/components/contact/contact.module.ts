import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ContactComponent } from "./contact.component"
import { ButtonModule } from "../button/button.module"
import { ContactModalModule } from "../contact-modal/contact-modal.module"

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ButtonModule, ContactModalModule],
  exports: [ContactComponent],
})
export class ContactModule {}
