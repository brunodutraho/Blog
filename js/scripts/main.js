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
  });