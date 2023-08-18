
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let resultInput = document.getElementById("resultInput");
let sum = document.getElementById("sum");

input1.addEventListener("keyup", calculateSum);

input2.addEventListener("keyup", calculateSum);

input1.addEventListener("keyup", function() {
    console.log("Bạn đang ấn phím", event.key , "vào ô thứ nhất");
    });
    input2.addEventListener("keyup", function() {
    console.log("Bạn đang ấn phím", event.key , "vào ô thứ hai");
    });

function calculateSum() {
  let value1 = parseFloat(input1.value) || 0;
  let value2 = parseFloat(input2.value) || 0;
  resultInput.value = value1 + value2;
}

  
  sum.addEventListener("click", function() {
    sum.textContent = resultInput.value;
     console.log("Tổng là", resultInput.value);
  });
