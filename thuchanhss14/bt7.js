document.addEventListener("copy", function(event) {
    event.preventDefault(); 
    const textToCopy = window.getSelection().toString(); 
    
    // Tạo thông báo
    const notification = document.createElement("div");
    // notification.textContent = "Bạn đã copy thành công: " + textToCopy;
    // notification.style.position = "fixed";
    // notification.style.bottom = "20px";
    // notification.style.right = "20px";
    // notification.style.background = "green";
    // notification.style.color = "white";
    // notification.style.padding = "10px";
    
    document.body.appendChild(notification);
    alert("Bạn đã copy thành công: " + textToCopy)
    
    // Xóa thông báo sau một khoảng thời gian
    // setTimeout(function() {
    //   document.body.removeChild(notification);
    // }, 3000);
  });