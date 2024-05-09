import Swiper from "swiper";
import $ from "jquery";
import { Navigation } from "swiper/modules";

if ($(".projects").length) {
  let swiperProject = new Swiper(".projects .swiper", {
    modules: [Navigation],

    slideClass: "swiper-slide",
    slidesPerView: 1,
    speed: 600,

    navigation: {
      nextEl: ".projects .swiper .swiper-navigation-next-button",
      prevEl: ".projects .swiper .swiper-navigation-prev-button",
    },
  });
}
