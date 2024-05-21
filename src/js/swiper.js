import Swiper from "swiper";
import $ from "jquery";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";
import "swiper/css/effect-fade";

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

if ($(".reviews").length) {
  let swiperReviews = new Swiper(".reviews .swiper", {
    modules: [Navigation, Pagination, EffectFade],

    slideClass: "swiper-slide",
    slidesPerView: 1,
    allowTouchMove: false,
    fadeEffect: { crossFade: true },

    effect: "fade",

    breakpoints: {
      320: {
        navigation: {
          nextEl:
            ".reviews .swiper .swiper-navigation-mobile .swiper-navigation-next-button",
          prevEl:
            ".reviews .swiper .swiper-navigation-mobile .swiper-navigation-prev-button",
        },

        pagination: {
          el: ".reviews .swiper .swiper-navigation-mobile .swiper-bullets",
          clickable: true,
        },
      },
      961: {
        navigation: {
          nextEl: ".reviews .swiper .swiper-navigation-next-button",
          prevEl: ".reviews .swiper .swiper-navigation-prev-button",
        },

        pagination: {
          el: ".reviews .swiper .swiper-bullets",
          clickable: true,
        },
      },
    },
  });
}
