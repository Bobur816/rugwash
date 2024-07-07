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
});
