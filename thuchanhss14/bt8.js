
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const resultSpan = document.getElementById("result");

addButton.addEventListener("click", function() {
  calculate("add");
});

subtractButton.addEventListener("click", function() {
  calculate("subtract");
});

multiplyButton.addEventListener("click", function() {
  calculate("multiply");
});

divideButton.addEventListener("click", function() {
  calculate("divide");
});

function calculate(operation) {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);

  if (isNaN(number1) || isNaN(number2)) {
    resultSpan.textContent = "Vui lòng nhập số hợp lệ.";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        resultSpan.textContent = "Không thể chia cho 0.";
        return;
      }
      break;
  }

  resultSpan.textContent = "Kết quả: " + result;
}

