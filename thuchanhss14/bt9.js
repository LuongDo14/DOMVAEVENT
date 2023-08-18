
const registrationForm = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");
const messageDiv = document.getElementById("message");

submitButton.addEventListener("click", function() {
  const fullName = registrationForm.fullName.value;
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;
  
  if (fullName.trim() === "" || email.trim() === "" || password.trim() === "") {
    showMessage("Vui lòng nhập đầy đủ thông tin.");
    return;
  }
  
  if (!isValidEmail(email)) {
    showMessage("Email không đúng định dạng.");
    return;
  }
  
  showMessage("Chúc mừng bạn đã nhập đúng dữ liệu.");
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function showMessage(text) {
  messageDiv.textContent = text;
}
