import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { TestimonialsPageRoutingModule } from "./testimonials-page-routing.module"
import { TestimonialsPageComponent } from "./components/testimonials-page/testimonials-page.component"
import { ReviewSliderModule } from "../../shared/components/review-slider/review-slider.module"

@NgModule({
  declarations: [TestimonialsPageComponent],
  imports: [CommonModule, TestimonialsPageRoutingModule, ReviewSliderModule],
})
export class TestimonialsPageModule {}
