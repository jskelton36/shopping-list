'use strict'; //enable JS strict mode

// Object of todoList
const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];

function generateItemElement(item){
  // this function creates each list item element
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function generateShoppingItemsString(shoppingList) {
  // this function will return a string of the shoppingList items with the required HTML
  // for the list
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));

  return items.join("");

}

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // inserting function HTML into DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}

function addItemToShoppingList(itemName){
  // This function will add a new object to the STORE array.
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.push({id: cuid(), name: itemName, checked: false});
}

function handleNewItemSubmit() {
  // This function will be responsible for when users click the "submit" button
  // for adding a shopping list item. This function will detect that the user has 
  // clicked the submit button and retrieve the value of the input field. 
  // It will then push the value of the input field to the STORE array and
  // call the renderShoppingList function to display the HTML with the new item.
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

function toggleCheckedForListItem(itemId) {
  // This function will toggle the checked property of an item in STORE
  console.log("Toggling checked property for item with id " + itemId);
  const item = STORE.find(item => item.id === itemId);
  item.checked = !item.checked;
} 

function getItemIdFromElement(item) {
  // This function will return the item id from the closest li element.
  return $(item)
    .closest('li')
    .data('item-id');
}

function handleItemCheckClicked() {
  // This function will be responsible for when users click the "check" button on
  // a shopping list item. This function will listen for the on click event and identify 
  // which item has been selected for "check". After the event has been triggered it 
  // will class toggle the item to add or remove the checked class. It will then call
  // the renderShoppingList function to display the HTML with the item checked or unchecked. 
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
    console.log('`handleItemCheckClicked` ran');
    const id = getItemIdFromElement(event.currentTarget);
    toggleCheckedForListItem(id);
    renderShoppingList();
  });
}

function removeItemFromList(itemId){
  // This function will delete delete an item from list
  console.log("Deleting item from list with id " + itemId);
  const index = STORE.findIndex(item => item.id === itemId);
  STORE.splice(index, 1);
}

function handleDeleteItemClicked() {
  // This function will be responsible for when users want to delete a shopping list
  // item. This function will listen for the on click event and identify which item is to 
  // be removed. It will then remove the item from the STORE array and call the
  // renderShoppingList function to display the HTML with the item removed.
  $('.js-shopping-list').on('click', `.js-item-delete`, event => {
  console.log('`handleDeleteItemClicked` ran')
  const itemId = getItemIdFromElement(event.currentTarget);
  removeItemFromList(itemId);
  renderShoppingList();
  });
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
    const inputValue = event
      .target['shopping-list-entry']
      .value; //set value of input after submit
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
      $(this)
        .closest("li")
        .find(".shopping-item")
        .toggleClass("shopping-item__checked");
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
