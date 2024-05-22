import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* PRELOADER */
// Preloader & transition
const prelodaer = document.querySelector(".preloader");
const prelodaerCount = document.querySelector(".preloader__number");

if (prelodaer) {
  document.body.classList.add("noscroll");
}

if (prelodaerCount) {
  window.addEventListener("load", () => {
    function number_to(id, from, to, duration) {
      var element = document.getElementById(id);
      var start = new Date().getTime();

      setTimeout(function count() {
        var now = new Date().getTime() - start;
        var progress = now / duration;
        var result = Math.floor((to - from) * progress + from);
        element.innerHTML = progress < 1 ? result : to;
        if (progress < 1) setTimeout(count, 10);
      }, 20);
    }
    number_to("preloder-count", 0, 100, 1000);

    gsap.to(".preloader__content", {
      duration: 1,
      opacity: 0,
      delay: 0.3,
      ease: "power4.in",
    });

    gsap.to(".preloader", {
      duration: 1,
      yPercent: -100,
      delay: 1,
      ease: "power4.in",
    });

    setTimeout(() => {
      document.body.classList.remove("noscroll");
    }, 3000);
  });
}

/* HORIZONTAL SCROLL */
const horizontalScrolling = document.querySelector(".horizontal-scrolling");
let horizontalScrollingMedia = gsap.matchMedia();

if (horizontalScrolling) {
  horizontalScrollingMedia.add("(min-width: 960px)", () => {
    gsap.to(".horizontal-scrolling__items", {
      xPercent: -100,
      x: () => document.body.clientWidth - 100 * (innerWidth / 960),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalScrolling,
        start: `${56 * (innerWidth / 960)}px top`,
        end: () => innerWidth * 2,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    gsap.to(".horizontal-scrolling__bar", {
      width: "100%",
      scrollTrigger: {
        trigger: horizontalScrolling,
        start: `${56 * (innerWidth / 960)}px top`,
        end: () => innerWidth * 2,
        scrub: true,
      },
    });
  });

  horizontalScrollingMedia.add("(max-width: 959px)", () => {
    gsap.to(".horizontal-scrolling__items", {
      xPercent: -100,
      x: () =>
        document.body.clientWidth - (32 + 16 * ((innerWidth - 375) / 585)),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalScrolling,
        start: `${28 + 44 * ((innerWidth - 375) / 585)}px top`,
        end: () => {
          const items = horizontalScrolling.querySelectorAll(
            ".horizontal-scrolling__item"
          );

          let width = 0;

          items.forEach((item) => {
            width += item.offsetWidth;
          });

          width -= items[items.length - 1].offsetWidth;

          return `+=${width}`;
        },
        scrub: true,
        pin: true,
        markers: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    gsap.to(".horizontal-scrolling__bar", {
      width: "100%",
      scrollTrigger: {
        trigger: horizontalScrolling,
        start: `${28 + 44 * ((innerWidth - 375) / 585)}px top`,
        end: () => {
          const items = horizontalScrolling.querySelectorAll(
            ".horizontal-scrolling__item"
          );

          let width = 0;

          items.forEach((item) => {
            width += item.offsetWidth;
          });

          width -= items[items.length - 1].offsetWidth;

          return `+=${width}`;
        },
        scrub: true,
      },
    });
  });
}

/* STICKY PART */
const stickySections = gsap.utils.toArray(".sticky-section");
const stickySectionsMedia = gsap.matchMedia();

if (stickySections.length) {
  stickySections.forEach((section) => {
    stickySectionsMedia.add("(min-width: 960px)", () => {
      ScrollTrigger.create({
        trigger: section.querySelector(".sticky-element"),
        pin: true,
        start: "top top",
        end: `+=${
          section.querySelector(".sticky-no-element").offsetHeight -
          section.querySelector(".sticky-element .sticky-element__content")
            .offsetHeight
        }`,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    });
  });
}

/* TEXT ANIMATION */
const textElements = gsap.utils.toArray(
  ".animation-parent h1, .animation-parent h2, .animation-parent h3, .animation-parent h4, .animation-parent h5, .animation-parent h6, .animation-parent p, .animation-parent a:not(.btn)"
);

textElements.forEach((el) => {
  gsap.fromTo(
    el,
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      ease: "power1.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: el.closest(".animation-parent"),
        start: "top center",
      },
    }
  );
});
