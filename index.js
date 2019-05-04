// Object of todoList
const todoList = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: true},
  {name: "bread", checked: false}
];


function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
  console.log('`renderShoppingList` ran');
}


function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
window.onload = function() {
  handleShoppingList();
};

/* orginal solution before lesson

function addItem(){
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault(); // disable default submit action
    const inputValue = event.target['shopping-list-entry'].value; //set value of input after submit
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
    $('#shopping-list-entry').val(''); //clear input value on submit
  });
}
function updateItem(){
  $("ul").on("click", "button", function(e) {
    if ($(this).hasClass("shopping-item-toggle")) {
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    }
    else if ($(this).hasClass("shopping-item-delete")) { //else if for optimization
      $(this).closest("li").remove();
    }
  });
}
window.onload = function() { //run after page fully loads
  addItem();
  updateItem();
};
*/
