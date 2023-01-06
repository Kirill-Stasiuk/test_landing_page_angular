import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: "app-contact-modal",
  templateUrl: "./contact-modal.component.html",
  styleUrls: ["./contact-modal.component.scss"],
})
export class ContactModalComponent implements OnInit {
  @Output() modal = new EventEmitter<void>()

  modalForm!: FormGroup
  successMessage: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.modalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(255),
      ]),
    })
  }

  onSubmit() {
    console.log(this.modalForm.value)
    this.modalForm.reset()
    this.successMessage = true

    setTimeout(() => {
      this.successMessage = false
    }, 3000)
  }

  get name() {
    return this.modalForm.get("name")
  }
  get email() {
    return this.modalForm.get("email")
  }
  get message() {
    return this.modalForm.get("message")
  }
}
