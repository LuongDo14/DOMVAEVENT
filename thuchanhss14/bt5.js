
const inputField = document.getElementById("inputField");
const viewButton = document.getElementById("viewButton");
const outputDiv = document.getElementById("outputDiv");

inputField.addEventListener("input", function() {
  outputDiv.textContent = inputField.value;
});

inputField.addEventListener("keyup", function() {
  outputDiv.textContent = inputField.value;
  console.log("Bạn đang ấn phím", event.key);
});

viewButton.addEventListener("click", function() {
  outputDiv.textContent = inputField.value;
   console.log("Bạn đang click vào", inputField.value);
});

