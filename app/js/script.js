document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();

  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99'
  });

  const ourTeamCarousel = new Swiper('[data-our-team-carousel]', {
    // Optional parameters
    spaceBetween: 24,
    slidesPerView: 1,
    allowTouchMove: false,
    centeredSlides: true,
    centerInsufficientSlides: true,
    breakpointsInverse: true,
    breakpoints: {
      667: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 12
      }
    }
  });

  const personInfoCarousel = new Swiper('[data-person-info-carousel]', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    controller: {
      control: ourTeamCarousel,
      by: 'container'
    },
    // effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom(swiper, current, total) {
        let output = current < 10 ? `0${current}` : current;
        return output;
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });



  if (window.matchMedia('(max-width: 1023px)').matches) {
    const benefitsCarousel = new Swiper('[data-benefits-carousel]', {
      // Optional parameters
      speed: 800,
      slidesPerView: 1,
      // centeredSlides: true,
      spaceBetween: 24,
      autoplay: true,
      breakpointsInverse: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }

  const systemsIntegratedCarousel = new Swiper('[data-systems-integrated-carousel]', {
    speed: 800,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    breakpointsInverse: true,
    breakpoints: {
      667: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 7,
      }
    }
  });

  const videosCarousel = new Swiper('[data-videos-carousel]', {
    speed: 800,
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 40,
    breakpointsInverse: true,
    allowTouchMove: false,
    breakpoints: {
      667: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 52
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  floatLabel.init();
});
