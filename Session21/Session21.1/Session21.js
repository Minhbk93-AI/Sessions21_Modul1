// Execises 1

// const hideBtn = document.getElementById("hide-btn");
// const showBtn = document.getElementById("show-btn");
// const paragraph = document.getElementById("paragraph");

// console.log(hideBtn);
// console.log(showBtn);

// hideBtn.onclick = function () {
//   paragraph.style.display = "none";
// };

// showBtn.onclick = function () {
//   paragraph.style.display = "block";
// };

// Execises 2

// const toggleBtn = document.getElementById("toggle-btn");
// const body = document.getElementById("body");
//  console.log(body);

// toggleBtn.onclick = function () {
// background body
//   console.log(body.style);
// C1:Nếu mà dùng cách này thì sẽ dài
//   if (!body.style.backgroundColor) {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//   } else {
//     body.style.backgroundColor = "";
//     body.style.color = "";
//   }
// chưa có màu ---> add màu đen + đổi màu text
// nếu có màu rồi ---> add màu trắng + đổi màu text
//
//
//C2: Sử dụng CSS để làm đúng các tác vụ của CSS
//Class
//Kiểm tra xem đã tồn tại class darkmode trong body hay chưa
//Nếu rồi ---> xóa đi
//Nếu chưa ---> thêm vào
//   if (body.classList.contains("dark-mode") === true) {
//     body.classList.remove("dark-mode");
//   } else {
//     body.classList.add("dark-mode");
//   }

//
//
//   C3: body.classList.toggle("dark-mode");
// };
