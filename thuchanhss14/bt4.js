
const createButton = document.getElementById("createButton");
const studentForm = document.getElementById("studentForm");
const studentInfo = document.getElementById("studentInfo");
const infoStudentId = document.getElementById("infoStudentId");
const infoStudentName = document.getElementById("infoStudentName");
const infoAge = document.getElementById("infoAge");
const infoPhone = document.getElementById("infoPhone");
const infoEmail = document.getElementById("infoEmail");

createButton.addEventListener("click", function() {
  const studentId = document.getElementById("studentId").value;
  const studentName = document.getElementById("studentName").value;
  const age = parseInt(document.getElementById("age").value);
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  
  if (studentId.length !== 6) {
    alert("Mã sinh viên phải có đúng 6 ký tự.");
    return;
  }
  
  if (studentName.trim() === "") {
    alert("Tên sinh viên không được để trống.");
    return;
  }
  
  if (age < 18) {
    alert("Tuổi phải lớn hơn hoặc bằng 18.");
    return;
  }
  
  const phonePattern = /^[0-9]{10,11}$/;
  if (!phonePattern.test(phone)) {
    alert("Số điện thoại phải có 10 đến 11 chữ số và chỉ chứa số.");
    return;
  }
  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Định dạng email không hợp lệ.");
    return;
  }
  
  infoStudentId.textContent = studentId;
  infoStudentName.textContent = studentName;
  infoAge.textContent = age;
  infoPhone.textContent = phone;
  infoEmail.textContent = email;
  
  studentInfo.style.display = "block";
});
