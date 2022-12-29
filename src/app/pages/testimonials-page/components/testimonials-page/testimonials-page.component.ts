import { Component, OnInit } from "@angular/core"
import { Review } from "../../../../shared/models/slider.model"
import { REVIEW_SLIDER } from "../../../../shared/statics/slider.static"

@Component({
  selector: "app-testimonials-page",
  templateUrl: "./testimonials-page.component.html",
  styleUrls: ["./testimonials-page.component.scss"],
})
export class TestimonialsPageComponent implements OnInit {
  reviews: Review[] = REVIEW_SLIDER

  constructor() {}

  ngOnInit(): void {}
}
