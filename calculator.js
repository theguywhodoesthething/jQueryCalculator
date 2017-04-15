$(document).ready(function() {
    config();
    listen();
});

var BUTTONS_PER_ROW = 4;
var ERR_MSG = "Invalid input";
var buttonArr = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6,
    '-', 1, 2, 3, '+', 0, '.', '√', '='
];

var config = function() {

    var counter = 0;

    for (var i = 0; i < (buttonArr.length / BUTTONS_PER_ROW); i++) {

        var $buttonRow = $('<div>');
        $buttonRow.addClass('buttonRow');

        for (var j = 0; j < BUTTONS_PER_ROW; j++) {
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
    var $eqDiv = $('<div>');
    $eqDiv.attr('id', 'eqTop');
    $('#calc').append($eqDiv);
    newEqDiv();
}

var listen = function() {

    $('.calcButton').on('click', function(e) {

        e.preventDefault();
        buildEquation(this.name, parseInt(this.id));
    });
}

var equation = [];

var buildEquation = function(name, index) {

    switch (index) {
        case 0:
            equation = [];
            break;
        case 19:
            calculateResults(equation);
            equation = [];
            newEqDiv();
            return;
        case 1:
        case 2:
        case 3:
        case 7:
        case 11:
        case 15:
        case 18:
            equation.push(name)
            break;
        default:

            isNaN(equation[equation.length - 1]) ?
                equation.push(name) : equation[equation.length - 1] += name;

    }
    $('#eqTop').children().last().text(equation.join(' '));
}

var newEqDiv = function() {

    var $eq = $('<div>');
    $eq.addClass('eqDiv');
    $('#eqTop').append($eq);
}

var calculateResults = function(eqArr) {
    try {

      while(eqArr.length > 1) {
        if(eqArr.includes('x')) {
          var idx = eqArr.indexOf('x');
          var product = parseInt(eqArr[idx-1]) * parseInt(eqArr[idx+1]);
          eqArr.splice((idx-1), 3, product);
        } else if (eqArr.includes('÷')) {
          var idx = eqArr.indexOf('÷');
          var quotient = parseInt(eqArr[idx-1]) / parseInt(eqArr[idx+1]);
          eqArr.splice((idx-1), 3, quotient);
        } else if (eqArr.includes('+')) {
          var idx = eqArr.indexOf('+');
          var sum = parseInt(eqArr[idx-1]) + parseInt(eqArr[idx+1]);
          eqArr.splice((idx-1), 3, sum);
        } else if (eqArr.includes('-')) {
          var idx = eqArr.indexOf('-');
          var difference = parseInt(eqArr[idx-1]) - parseInt(eqArr[idx+1]);
          eqArr.splice((idx-1), 3, difference);
        }
      }
      newEqDiv();

      $('#eqTop').children().last().addClass('result');
      $('#eqTop').children().last().text(eqArr);

    } catch (e) {
      newEqDiv();
      $('#eqTop').children().last().text(ERR_MSG);    }
}
