let itemList = document.getElementById("itemList");
let newItemInput = document.getElementById("newItemInput");
let addItemButton = document.getElementById("addItemButton");



addItemButton.addEventListener("click", function() {
  let newItemText = newItemInput.value;
  if (newItemText !== "") {
    let newListItem = document.createElement("li");
    newListItem.textContent = newItemText;
    itemList.appendChild(newListItem);
    newItemInput.value = "";
  } else {
    newItemInput.style.backgroundColor = "yellow";   
  }
});