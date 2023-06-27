// * toggle menu
const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("opened");
  menu.classList.toggle("opened");
  document.body.classList.toggle("menu-opened");
});

// window.addEventListener("click", (event) => {
//   console.log(event.target === menu);
// });

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
  pagination: {
    el: ".blog-slider__pagination",
  },
});

const appContentSlider = new Swiper(".app-content-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  // effect: "fade",
  loop: true,
  allowTouchMove: false,
});

const appImgSlider = new Swiper(".app-img-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  thumbs: {
    swiper: appContentSlider,
  },
});

window.addEventListener("resize", scrollGrid);
// window.addEventListener("scroll", scrollGrid);

document.querySelector(".home-gifts").addEventListener("scroll", scrollGrid);

function scrollGrid() {
  let homeGiftsHeight = document.querySelector(".home-gifts").offsetHeight,
    giftCardsHeight = document.querySelector(".home-gifts__cards").offsetHeight,
    cards = document.querySelector(".home-gifts__cards"),
    transY =
      (document.querySelector(".home-gifts").scrollTop /
        (giftCardsHeight - homeGiftsHeight)) *
      -100;

  console.log(homeGiftsHeight, "home-gifts");
  console.log(giftCardsHeight, "home-gifts__cards");
  console.log(document.querySelector(".home-gifts").scrollTop, "window offset");

  cards.style.setProperty("--scroll", transY + "%");
}
scrollGrid();
