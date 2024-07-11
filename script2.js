$(window).on("load", () => {
  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 5
      ? $(".navigation").addClass("navigation-scrolled")
      : $(".navigation").removeClass("navigation-scrolled");
  });

  // $(".question__item__question").on("click", function (e) {
  //   let parent = e.target.closest(".question__item");

  //   document.querySelectorAll(".question__item").forEach((el) => {
  //     if (el !== parent) {
  //       el.classList.remove("active");
  //     }
  //   });

  //   parent.classList.toggle("active");
  // });

  function toggleMobileNav() {
    $(".navigation__list")[0].classList.toggle("active");
    $(".navigation__mobile_bg")[0].classList.toggle("active");
  }

  $(".btn_of_navbar-mobile").on("click", toggleMobileNav);

  $(".navigation__list").on("click", function (e) {
    if (e.target.classList.contains("navigation__list-item__link")) {
      toggleMobileNav();
    }
  });

  $(".question__item").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find(".question__item__answer").slideUp(400);
    } else {
      $(".question__item").removeClass("active");
      $(".question__item__answer").slideUp(400);
      $(this).addClass("active");
      $(this).find(".question__item__answer").slideDown(400);
    }
  });

  $(".navigation__list-item__link i").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass("active");
    $(this)
      .parents(".navigation__list-item")
      .find(".navigation__list-item__submenu")
      .slideToggle(400);
  });
});
