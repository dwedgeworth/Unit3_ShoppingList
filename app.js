//add from item to state object array (while preventing submission to the server), then clear the form
//create a functin that takes the state object and element as arguement
//to create the html with the item inside the state object array using the .map method (with a function)
//use .append method to add that the string containing the html and item to the element.
//then clear the state object array

$(document).ready(function(){
  $('#js-shopping-list-form').on('submit',function(event){
    event.preventDefault();
    addItem(stateObj,$('#shopping-list-entry').val());
    //(not sure if necessary) to clear the form?
    $(this).val("");
    renderList(stateObj,$('ul'));
    });
});

var stateObj = {
  itemArray: []
};

var addItem = function(state, item) {
  state.itemArray.push(item);
};

var renderList = function(state, element) {
  var itemshtml = state.itemArray.map(function(item){
    return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">' + 'check' + '</span></button><button class="shopping-item-delete"><span class="button-label">' + 'delete' +'</span></button></div></li>';
    });

  
  element.append(itemshtml);
  //empty the itemArray from stateObj
  stateObj.itemArray.splice(0,1);
}

//attach the listener to the parent element ('ul') so that the listener 'listen to'
//child all child elements that originated with the page and are added later
$(document).ready(function(){
  $('ul').on('click', '.shopping-item-toggle', function(event){
  event.preventDefault();
  //jump to the parent of the click element and come back to the child so that you don't toggleClass for all spans
  $(this).closest('li').children('span').toggleClass('shopping-item__checked');
  });
});

$(document).ready(function(){
  $('ul').on('click', '.shopping-item-delete', function(event){
  event.preventDefault();
  $(this).closest('li').remove();
  });
});

/*
"<li><span class="shopping-item">" + item + "</span></li>"
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
*/

 //addItem(stateObj,$('#shopping-list-entry').val());
 //stateObj.itemArray;
 //renderList(stateObj,$('ul'));

