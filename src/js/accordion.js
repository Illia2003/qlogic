import $ from "jquery";

if ($(".accordion").length) {
  $(".accordion").each((i, accordionBlock) => {
    $(accordionBlock)
      .find(".accordion__top")
      .on("click", ({ currentTarget }) => {
        const accordionItemEl = $(currentTarget);

        $(accordionBlock).find(".accordion__item.active").removeClass("active");

        accordionItemEl.parent(".accordion__item").addClass("active");
      });
  });
}
