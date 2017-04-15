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
    $eqDiv.attr('id', 'equations');
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
            var lastEntry = equation[equation.length - 1];

            if (isNaN(lastEntry)) {
                equation.push(name);
            } else {
                equation[equation.length - 1] += name;
            }
    }
    $('#equations:last-child').text(equation);
}

var newEqDiv = function() {

    console.log("hello?");

    var $eq = $('<div>');
    $eq.addClass('eqDiv');
    $('body').append($eq);

    $eqDiv = $('<div>');
    $eqDiv.attr('id', 'equations');
    $('#calc').append($eqDiv);
}
