$(document).ready(function () {
  $(".question__item__question").on("click", function (e) {
    let parent = e.target.closest(".question__item");

    document.querySelectorAll(".question__item").forEach((el) => {
      if (el !== parent) {
        el.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });

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
});
