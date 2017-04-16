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

            var $numButton = $('<button>');
            $numButton.addClass('number');
            $numButton.attr('name', numberArr[counter]);
            $numButton.text(numberArr[counter]);
            $numberRow.append($numButton);

            counter++;
        }
    }

    var $operationRow = $('<tr>');
    $operationRow.addClass('operationRow');
    $table.append($operationRow);

    operationArr.forEach((v,i,a) => {

      var $opButton = $('<button>');
      $opButton.addClass('operator');
      $opButton.attr('name', a[i]);
      $opButton.text(a[i]);
      $operationRow.append($opButton);
    });

    var $sumClearRow = $('<tr>');
    $sumClearRow.addClass('sumClearRow');
    $table.append($sumClearRow);

    var $sumButton = $('<button>');
    $sumButton.attr('id', 'sum');
    $sumButton.text('SUM');
    $sumClearRow.append($sumButton);

    var $clearButton = $('<button>');
    $clearButton.attr('id', 'clear');
    $clearButton.text('CLEAR');
    $sumClearRow.append($clearButton);

    var $displayRow = $('<tr>');
    $displayRow.addClass('displayWindow');
    $table.prepend($displayRow);

    var $displayTd = $('<td>');
    $displayTd.attr('id', 'display');
    $displayRow.append($displayTd);

    $('#calc').append($table);

}

var firstNum = '';
var secondNum = '';
var opSign = '';

var assignListenersByClass = function() {

  $('button').on('click', function(e) {

    e.preventDefault

    var btnClass = $(this).attr('class');
    var btnName = this.name;
    var btnId = this.id;

    if (btnClass === 'number' && opSign.length === 0) {
        firstNum += btnName;
        $('#display').text(firstNum);
    } else if (btnClass === 'operator'){
        opSign = btnName;
    } else if (btnId === 'sum') {

      var temp;

      switch(opSign) {
        case '+':
          temp = parseInt(firstNum) + parseInt(secondNum);
          $('#display').text(temp);
          break;
        case '-':
          temp = parseInt(firstNum) - parseInt(secondNum);
          $('#display').text(temp);
          break;
        case '*':
          temp = parseInt(firstNum) * parseInt(secondNum)
          $('#display').text(temp);
          break;
        case '/':
          temp = parseInt(firstNum) / parseInt(secondNum);
          $('#display').text(temp);
          break;
        default:
          firstNum = '';
          secondNum = '';
          opSign = '';
          $('#display').text('ERROR');
          return;
      }

      firstNum = temp;
      secondNum = '';
      opSign = '';

    } else if (btnId === 'clear') {
        firstNum = '';
        secondNum = '';
        opSign = '';
        $('#display').empty();
    } else if (opSign.length === 1 && firstNum.length !== 0){
        secondNum += btnName;
        $('#display').text(secondNum);
    } else {
        firstNum = '';
        secondNum = '';
        opSign = '';
        $('#display').text('ERROR');
    }

      console.log(firstNum);
      console.log(secondNum);
      console.log(opSign);
    });

}
