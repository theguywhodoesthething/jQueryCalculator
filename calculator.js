$(document).ready(function() {
  config();
});

// buttonArr size = 20
var buttonArr = ['AC', '+/-', '%', '÷',
                  7, 8, 9, 'x', 4, 5, 6,
                  '-', 1, 2, 3, '+', 0,
                  '.', '√', '='];

var config = function(){
  $('.calcButton').on('click', function(e){
    if($(this).text() === 'On!'){
      $(this).text('Off!');
    } else {
      $(this).text('On!');
    }
  });
}
