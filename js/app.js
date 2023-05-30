const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  rewind: true,
});

const heroThumbSlider = new Swiper(".hero-thumb-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  rewind: true,

  breakpoints: {
    768: {
      slidesPerView: 5,
    },
  },
});

heroSlider.controller.control = heroThumbSlider;
heroThumbSlider.controller.control = heroSlider;
