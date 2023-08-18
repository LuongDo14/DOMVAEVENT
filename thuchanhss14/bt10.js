
const buyerForm = document.getElementById("buyerForm");
const recipientForm = document.getElementById("recipientForm");
const copyButton = document.getElementById("copyButton");
const sendEmailButton = document.getElementById("sendEmailButton");
const orderButton = document.getElementById("orderButton");
const resetButton = document.getElementById("resetButton");

copyButton.addEventListener("click", function() {
  recipientForm.recipientName.value = buyerForm.buyerName.value.toUpperCase();
  recipientForm.recipientEmail.value = buyerForm.buyerEmail.value;
  recipientForm.recipientOrderDate.value = buyerForm.orderDate.value;
});

sendEmailButton.addEventListener("click", function() {
  if (recipientForm.recipientName.value !== "") {
    alert("Đặt hàng thành công, email đã gửi tới cho quý khách.");
  } else {
    alert("Đặt hàng thành công.");
  }
});

orderButton.addEventListener("click", function() {
  if (recipientForm.recipientName.value !== "") {
    alert("Đặt hàng thành công, email đã gửi tới cho quý khách.");
  } else {
    alert("Đặt hàng thành công.");
  }
});

resetButton.addEventListener("click", function() {
  buyerForm.reset();
  recipientForm.reset();
});
