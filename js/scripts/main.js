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