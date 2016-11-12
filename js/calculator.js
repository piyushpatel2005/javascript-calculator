function addition(val1, val2) {
  var a = parseFloat(val1);
  var b = parseFloat(val2);
  return a + b  ;
}

function subtraction (val1, val2) {
  var a = parseFloat(val1);
  var b = parseFloat(val2);
  return (a - b);
}

function percent (val1) {
  return val1 * 100;
}

function multiply (val1, val2) {
  var a = parseFloat(val1);
  var b = parseFloat(val2);
  return (a * b).toFixed(2);
}

function divide (val1, val2) {
  var a = parseFloat(val1);
  var b = parseFloat(val2);
  return (a / b).toFixed(2);
}

var inputValue = $(".input").val();
var inputField = $(".input");
$(".input").val("0.0");
var operator;
function showField () {
  if(inputValue !== "0") {      // Check for string as initially the value is null which is treated as 0 in unstrict equality.
    inputValue = inputValue + $(this).text();
    inputField.val(inputValue);
  } else {
    inputField.val(inputValue);
  }
}
$(".show").on ("click", showField);

$(".operation").on("click", function () {
  input1 = $(".input").val();
  $(".input").val("");
  inputValue = $(".input").val();
  operator = $(this).text();
});

function calculate() {
  // The same functionality can be achieved using eval() function.
  input2 = $(".input").val();
  var answer;
  inputValue = "";
  switch(operator) {
    case "+":
      answer = addition(input1, input2);
      break;
    case "-":
      answer = subtraction(input1, input2);
      break;
    case "x":
      answer = multiply(input1, input2);
      break;
    case "/":
      answer = divide(input1, input2);
      break;
    case "%":
      answer = percent(input1);

  }
  $(".input").val(answer);
}

$(".calculate").on("click", calculate);

function reset () {
  $(".input").val("0.0");
}

function result () {
  inputValue = $(".input").val();
  $(".input").val(inputValue);
}

$(".reset").click(reset);
$(".clear").click(reset);




// var inputField = $(".input");
// var inputValue = "";
// $(".input").val("0.0");
//
// function display() {
//   inputValue += $(this).text();
//   inputField.val(inputValue);
// }
//
// function calculate () {
//   inputValue = $(".input").val();
//   result = eval(inputValue);
//   inputField.val(result);
//   inputValue = "";
// }
//
// function reset() {
//
// }
// $(".show").click(display);
// $(".operation").click(display);
// $(".calculate").click(calculate);




// $(document).ready(function() {
//   $(".input").focus();
//
//   $(".input").on("change keyup", function (e) {
//     // console.log(e.keyCode);
//     keyPressed = e.which;
//     value += getValue(keyPressed);
//     console.log("Value entered: " + value);
//     if(keyPressed === 42 || keyPressed === 43 || keyPressed === 47 || keyPressed === 45) {
//       console.log("Proper operation selected!");
//       operator = getOperator(keyPressed);
//     }
//   });
// });
//
// var value = "";
//
// function getValue (value) {
//   console.log(value);
//   value = value - 48;
//   console.log(value + " was entered!");
//   return value;
// }
//
// function getOperator(op) {
//   operator = op;
// }
//
// $(".input").on("change keyup", function (e) {
//   // console.log(e.keyCode);
//   keyPressed = e.which;
//   value += getValue(keyPressed);
//   console.log("Value entered: " + value);
//   if(keyPressed === 42 || keyPressed === 43 || keyPressed === 47 || keyPressed === 45) {
//     console.log("Proper operation selected!");
//     operator = getOperator(keyPressed);
//   }
// });
