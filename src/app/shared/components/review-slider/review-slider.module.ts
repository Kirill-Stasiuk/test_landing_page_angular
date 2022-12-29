import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReviewSliderComponent } from "./review-slider.component"
import { SwiperModule } from "swiper/angular"

@NgModule({
  declarations: [ReviewSliderComponent],
  imports: [CommonModule, SwiperModule],
  exports: [ReviewSliderComponent],
})
export class ReviewSliderModule {}
