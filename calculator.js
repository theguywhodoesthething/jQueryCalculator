$(document).ready(function() {
  config();
  listen();
});

// buttonArr size = 20
var BUTTONS_PER_ROW = 4;
var buttonArr = ['AC', '+/-', '%', '÷',
                  7, 8, 9, 'x', 4, 5, 6,
                  '-', 1, 2, 3, '+', 0,
                  '.', '√', '='];

var config = function(){

  var counter = 0;

  for(var i = 0; i < (buttonArr.length/BUTTONS_PER_ROW); i++) {

    var $buttonRow = $('<div>');
    $buttonRow.addClass('buttonRow');

    for(var j = 0; j < BUTTONS_PER_ROW; j++){
      var $button = $('<button>');
      $button.attr('id', counter);
      $button.attr('name', buttonArr[counter]);
      $button.addClass('calcButton');
      $button.addClass('btn');
      $button.text(buttonArr[counter]);
      $buttonRow.append($button);
      counter++;
    }
    $('#calc').append($buttonRow);
  }
}

var listen = function() {

    $('.calcButton').on('click', function(e){

      e.preventDefault();

      var btnName = this.name;
      var btnId = this.id;


  });
}
