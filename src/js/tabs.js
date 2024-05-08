import $ from "jquery";

if ($(".tabs").length) {
  $(".tabs").each((i, tabsBlock) => {
    $(tabsBlock)
      .find(".tabs__tab")
      .on("click", ({ currentTarget }) => {
        const tabEl = $(currentTarget);

        $(tabsBlock).find(".tabs__tab.active").removeClass("active");
        $(tabsBlock).find(".tab__content.active").removeClass("active");

        tabEl.addClass("active");
        $(tabsBlock)
          .find(`.tab__content[data-tab-index="${tabEl.data("tab-index")}"]`)
          .addClass("active");
      });
  });
}
