import { SwiperOptions } from "swiper"

export const SLIDER_CONFIG: SwiperOptions = {
  pagination: true,
  slidesPerView: 2,
  grabCursor: true,
  breakpoints: {
    1920: {
      slidesPerView: 2,
    },
    1401: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 1,
    }
  }
}
