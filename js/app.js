// * header
const header = document.getElementById("header");
const checkScroll = () => {
  if (window.scrollY !== 0) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
};
checkScroll();

window.addEventListener("scroll", () => {
  checkScroll();
});

// * hero sliders
const heroThumbSlider = new Swiper(".hero-thumb-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  loopedSlides: 7,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
  },
});

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  loop: true,
  thumbs: {
    swiper: heroThumbSlider,
  },
});

const blogSlider = new Swiper(".blog-slider", {
  effect: "coverflow",
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
  },
});
