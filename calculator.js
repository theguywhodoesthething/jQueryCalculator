$(document).ready(function() {
  config();
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
      var $button = $('<div>');
      $button.addClass('button');
      $button.text(buttonArr[counter]);
      $buttonRow.append($button);
      counter++;
    }
    $('#calc').append($buttonRow);
  }

  // buttonArr.forEach(function(v,i,a){
  //   $('#calc').append('<div>').text(v);
  // });

  // $('.calcButton').on('click', function(e){
  //   if($(this).text() === 'On!'){
  //     $(this).text('Off!');
  //   } else {
  //     $(this).text('On!');
  //   }
  // });
}
