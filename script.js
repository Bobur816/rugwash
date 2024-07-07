// $(document).ready(function () {
//   let ServiceCards = document.querySelectorAll(".slider__item_service");
//   let curServiceCard = 0;
//   //   console.log(numServiceCards);
//   function gotoSlide(slide) {
//     // ServiceCards.forEach((el, i) => {
//     //   el.classList.remove("slider__item_show");
//     // });
//     ServiceCards.forEach((el, i) => {
//       el.classList.remove("slider__item_show");
//       if (i <= slide + 2 && i >= slide) {
//         el.classList.toggle("slider__item_show");
//       }
//     });
//     // ServiceCards[slide].style.backgroundColor = "blue";
//   }

//   gotoSlide(curServiceCard);

//   $(".slider_service__prev-btn").on("click", function () {
//     if (curServiceCard !== 0) {
//       curServiceCard--;
//     }
//     gotoSlide(curServiceCard);
//   });
//   $(".slider_service__next-btn").on("click", function () {
//     if (curServiceCard !== ServiceCards.length - 3) {
//       curServiceCard++;
//     }
//     gotoSlide(curServiceCard);
//   });
// });

const swiper = new Swiper(".slider_service", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider_service__next-btn",
    prevEl: ".slider_service__prev-btn",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".solvings_mobile", {
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".slider_service__next-btn",
  //   prevEl: ".slider_service__prev-btn",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2.5,
    },
    700: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper(".slider_clients", {
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".btn_clien_next",
    prevEl: ".btn_clien_prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

const swiper4 = new Swiper(".slider_news", {
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider_news__next-btn",
    prevEl: ".slider_news__prev-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
