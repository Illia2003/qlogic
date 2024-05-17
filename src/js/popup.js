import $ from "jquery";

if ($(".popup-button").length) {
  $(".popup-button").on("click", (e) => {
    const button = $(e.currentTarget);

    const popup = $(`#${button.data("popup-id")}`);

    popup.addClass("show");
    $("body").addClass("noscroll");
  });

  $(".popup__close").on("click", ({ target }) => {
    const button = $(target);

    const popup = button.parents(".popup");

    popup.removeClass("show");
    $("body").removeClass("noscroll");
  });

  $("body").on("click", ({ target }) => {
    if (
      !$(target).hasClass("popup__body") &&
      !$(target).parents(".popup__body").length &&
      $(target).parents(".popup").length
    ) {
      $(".popup.show").removeClass("show");
      $("body").removeClass("noscroll");
    }
  });
}
