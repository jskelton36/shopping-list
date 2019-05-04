$( "#js-shopping-list-form" ).submit(function( event ) {
    event.preventDefault();
    let inputValue = $( "#shopping-list-entry" ).val()
    $("ul").append(`<li>
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
    console.log($( "#shopping-list-entry" ).val());
  });