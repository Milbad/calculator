$(document).ready(function() {
  var total = 0;
  var screenView = '';
  var lastOp;
  var oldNum = '';
  var numClick = '';
  var numClicked = false;

  $(".op").click(function() {
    if (numClicked) {
      $("#clear-last").prop("disabled", false);
      makeOperation();
      if (lastOp == "=") {
        screenView = total;
      }
      numClick = '';
      lastOp = $(this).attr('value');
      oldNum = parseFloat($("#entered").text());
      $("#entered").text(lastOp);
      screenView += lastOp;
      $("#operation").text(screenView);
      numClicked = false;
    }
  });

  $("#all-clear").click(function() {
    setToZero();
  });

  function setToZero() {
    numClick = '';
    lastOp = '';
    oldNum = '';
    total = 0;
    screenView = '';
    $("#entered").text(0);
    $("#operation").text(0);
  }

  function makeOperation() {
    switch (lastOp) {
      case '+':
        if (total !== 0) {
          total += parseFloat($("#entered").text());
          total = total.toFixed(2);
        } else {
          total = (oldNum + parseFloat($("#entered").text()));
          total = total.toFixed(2);
        }
        break;
      case '/':
        if (total !== 0) {
          total /= parseFloat($("#entered").text());
          total = total.toFixed(2);
        } else {
          total = (oldNum / parseFloat($("#entered").text()));
          total = total.toFixed(2);
        }
        break;
      case '-':
        if (total !== 0) {
          total -= parseFloat($("#entered").text());
          total = total.toFixed(2);
        } else {
          total = (oldNum - parseFloat($("#entered").text()));
          total = total.toFixed(2);
        }
        break;
      case 'x':
        if (total !== 0) {
          total *= parseFloat($("#entered").text());
          total = total.toFixed(2);
        } else {
          total = (oldNum * parseFloat($("#entered").text()));
          total = total.toFixed(2);
        }
        break;

      case '=':
        if (total !== 0) {
          total = parseFloat($("#entered").text());

        }
        break;
      default:
        console.log('default');
    }
  }

  $(".num").click(function() {
    numClicked = true;
    $("#clear-last").prop("disabled", false);
    numClick += $(this).attr('value');
    $("#entered").text(numClick);
    screenView += $(this).attr('value');
    $("#operation").text(screenView);
  });

  $("#egal").click(function() {
    $("#entered").text(total);
    screenView += total;
    $("#operation").text(screenView);
    numClicked = true;
  });

  $("#clear-last").click(function() {
    if (lastOp == '=') {
      setToZero();
    } else {
      numClick = '';
      screenView = $("#operation").text();
      screenView = screenView.split('');
      screenView.pop();
      screenView = screenView.join('');
      $("#entered").text(0);
      $("#operation").text(screenView);
    }
    if (numClicked) {
      numClicked = false;
    } else {
      numClicked = true;
    }
    $(this).prop("disabled", true);
  });

});
