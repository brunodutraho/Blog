var swiperPodcast = new Swiper(".slide-podcast", {
  slidesPerView: 4,
  spaceBetween: 37,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    490: {
      slidesPerView: 1.4,
      spaceBetween: 15,
    },
    590: {
      slidesPerView: 1.7,
      spaceBetween: 15,
    },
    690: {
      slidesPerView: 2.1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    860: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
  }
});

const btnScrollTop = document.getElementById('js-btn-scroll-top');

btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const btnMobile = document.getElementById('js-btn-hamburger');

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active');
})