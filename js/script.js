var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  centeredSlides: true,

  slidesPerView: 3,

  spaceBetween: 10,

  speed: 800,

  breakpoints: {
    0: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 5,
    },
  },
});
