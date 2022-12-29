import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core"
import SwiperCore, { Pagination, SwiperOptions } from "swiper"
import { SLIDER_CONFIG } from "../../statics/swiper.static"
import { Review } from "../../models/slider.model"

SwiperCore.use([Pagination])

@Component({
  selector: "app-review-slider",
  templateUrl: "./review-slider.component.html",
  styleUrls: ["./review-slider.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewSliderComponent implements OnInit {
  // @ts-ignore
  @Input() reviewSlide: Review[]
  swiperConfig: SwiperOptions = SLIDER_CONFIG

  constructor() {}

  ngOnInit(): void {}
}
