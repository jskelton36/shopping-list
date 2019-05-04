$("#js-shopping-list-form").submit(function(event) {
  event.preventDefault();
  let inputValue = $("#shopping-list-entry").val();
  let ul = $("ul").append(`<li>
    <span class="shopping-item">${inputValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  console.log($("#shopping-list-entry").val());
});

$("ul").on("click", "button", function(e) {
  if ($(this).hasClass("shopping-item-toggle")) {
    console.log("check clicked");
    console.log(this);
    // $(this)
    //   .closest("span")
    //   .addClass(".shopping-item__checked");
    $(this)
      .closest("li")
      .children(".shopping-item")
      .toggleClass("shopping-item__checked");
  }

  if ($(this).hasClass("shopping-item-delete")) {
    $(this)
      .closest("li")
      .remove();
  }
});
