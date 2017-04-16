$(document).ready(function() {

    main();
    assignListenersByClass();
});

var BUTTONS_PER_ROW = 5;
var ERR_MSG = "Invalid input";
var numberArr = [1,2,3,4,5,6,7,8,9,0];
var operationArr = ['*','-', '/', '+'];

var main = function() {

    var counter = 0;

    var $table = $('<table>');
    $table.attr('id', 'calcTable');

    for (var i = 0; i < (numberArr.length / BUTTONS_PER_ROW); i++) {

        var $numberRow = $('<tr>');
        $numberRow.addClass('numberRow');
        $table.append($numberRow);

        for (var j = 0; j < BUTTONS_PER_ROW; j++) {

            var $numberTd = $('<td>');
            $numberTd.addClass('number');
            $numberRow.append($numberTd);

            var $numButton = $('<button>');
            $numButton.attr('name', numberArr[counter]);
            $numButton.text(numberArr[counter]);
            $numberTd.append($numButton);

            counter++;
        }
    }

    var $operationRow = $('<tr>');
    $operationRow.addClass('operationRow');
    $table.append($operationRow);

    operationArr.forEach((v,i,a) => {
      var $operationTd = $('<td>');
      $operationTd.addClass('operator');
      $operationRow.append($operationTd);

      var $opButton = $('<button>');
      $opButton.attr('name', a[i]);
      $opButton.text(a[i]);
      $operationTd.append($opButton);
    });

    var $sumClearRow = $('<tr>');
    $sumClearRow.addClass('sumClearRow');
    $table.append($sumClearRow);

    var $sumTd = $('<td>');
    $sumTd.attr('id', 'sum');
    $sumClearRow.append($sumTd);

    var $sumButton = $('<button>');
    $sumButton.text('SUM');
    $sumTd.append($sumButton);

    var $clearTd = $('<td>');
    $clearTd.attr('id', 'clear');
    $sumClearRow.append($clearTd);

    var $clearButton = $('<button>');
    $clearButton.text('CLEAR');
    $clearTd.append($clearButton);

    var $displayRow = $('<tr>');
    $displayRow.addClass('displayWindow');
    $table.append($displayRow);

    var $displayTd = $('<td>');
    $displayTd.attr('id', 'display');
    $displayRow.append($displayTd);

    $('#calc').append($table);

}

var currNum = '';

var assignListenersByClass = function() {

  $('td').on('click', function(e) {

    e.preventDefault

    var btnClass = $(this).attr('class');
    var btnName = $(this).attr('name')

    console.log($(this));
    // console.log(btnName);
    // console.log(btnClass);

    if (btnClass === 'number') {
      currNum += btnName;
       $('display').text(currNum);
    }

  });
}
