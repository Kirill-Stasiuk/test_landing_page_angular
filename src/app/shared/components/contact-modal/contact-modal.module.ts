import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ContactModalComponent } from "./contact-modal.component"
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [ContactModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactModalComponent],
})
export class ContactModalModule {}
