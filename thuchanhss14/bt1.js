let bt1 = document.getElementById("baitap1");

let lb1 = document.createElement("label");
lb1.innerText = ("Nhập nội dung tìm kiếm");

bt1.appendChild(lb1);
let in1 = document.createElement("input");
in1.setAttribute("type", "")

bt1.appendChild(in1);

let np = document.createElement("span");
np.innerText = ("Ẩn tìm kiếm nâng cao");
np.style.color = "blue";
np.style.textDecoration = "underline";
np.setAttribute("id", "anvahien");

bt1.appendChild(np);

let se1 = document.createElement("select");
let brUserName = document.createElement("br");
bt1.appendChild(brUserName);
bt1.appendChild(se1);


let op1 = document.createElement("option");
op1.innerText = ("Quần áo");

se1.appendChild(op1);

let br2 = document.createElement("br");
bt1.appendChild(br2);

let br3 = document.createElement("br");
bt1.appendChild(br3);


let btn = document.createElement("button");
btn.innerText = ("Tìm kiếm");

bt1.appendChild(btn)
let hien = document.getElementById("anvahien");

hien.addEventListener("click", function() {
    if (se1.style.display === "none") {
      se1.style.display = "block";
      np.textContent = "Ẩn tìm kiếm nâng cao";
    } else {
      se1.style.display = "none";
      np.textContent = "Tìm kiếm nâng cao";
    }
  });