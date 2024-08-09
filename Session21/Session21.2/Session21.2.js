// let todoListDatabase = [
//   {
//     id: 1,
//     content: "Đi ngủ sớm đi",
//     status: false,
//   },
//   {
//     id: 2,
//     content: "Đọc sách, lập trình 8 tiếng/ ngày",
//     status: false,
//   },
//   {
//     id: 3,
//     content: "Ăn uống đủ no",
//     status: false,
//   },
//   {
//     id: 4,
//     content: "Ngủ",
//     status: false,
//   },
// ];
let todoListDatabase = JSON.parse(
  window.localStorage.getItem("todoListDatabase")
);
const ul = document.getElementById("myUL");
const adBtn = document.getElementById("adBtn");
const input = document.getElementById("myInput");
function render() {
  ul.innerHTML = "";

  for (let idx in todoListDatabase) {
    //Mỗi lần tạo ra 1 thẻ li khi duyệt quá từng đối tượng todo
    // Kiểm tra nếu đối tượng todo
    //có status=== true --> li có thêm class checked
    //có status === false ---> li bình thường
    //Cách 1:
    //   if (!todoListDatabase[idx].status) {
    //     li = `<li>${todoListDatabase[idx].content}</li>`;
    //   } else {
    //     li = `<li class= "checked">${todoListDatabase[idx].content}</li>`;

    // Cách 2: Dùng toán tử 3 ngôi
    let li = todoListDatabase[idx].status
      ? `<li id=${todoListDatabase[idx].id} class="checked" >${todoListDatabase[idx].content}
      <span class="close">×</span></li>`
      : `<li id=${todoListDatabase[idx].id}> ${todoListDatabase[idx].content}
      <span class="close">×</span></li>`;

    //   ul.innerHTML = ul.innerHTML + li;
    ul.insertAdjacentHTML("beforeend", li);
  }
  let liList = ul.children; // Lấy được tập hợp HTML Collection --> Tập hợp thẻ con của thẻ ul
  for (let li of liList) {
    li.onclick = function () {
      //B1: Lấy ra id nằm trong attribute của từng thẻ li

      //B2: Tìm kiếm phần tử dữ liệu trong DB trùng với id của phần tử li vừa click vào

      //B3: Tìm kiếm thành công thì sử dụng vị trí của phần tử dữ liệu tìm kiếm được để cập nhật lại trường
      //status của dữ liệu trong DB
      let findIndex = todoListDatabase.findIndex(function (el, i) {
        return el.id === +li.id;
      });
      todoListDatabase[findIndex].status = !todoListDatabase[findIndex].status;
      //Lưu trữ lại sự thay đổi này trong Local Storage
      window.localStorage.setItem(
        "todoListDatabase",
        JSON.stringify(todoListDatabase)
      );

      render();
    };
  }
  let spanList = document.getElementsByClassName("close");
  //   console.log(spanList);
  for (let delBtn of spanList) {
    delBtn.onclick = function (event) {
      event.stopPropagation(); // Ngăn chặn nổi bọt sự kiện event bubbling
      //   console.log(delBtn.parentElement); Kiểm tra phần tử cha cho delBtn
      //B1: Lấy ra thẻ id đang chưa delBtn(.parentElement)
      let li = delBtn.parentElement;
      //B2: Lấy ra được attribute id của thẻ li cha
      let id = li.id;
      //B3: Tìm được đối tượng dữ liệu ứng với thẻ li cha vừa bấm vào
      let findIndex = todoListDatabase.findIndex(function (el, i) {
        return el.id === +id;
      });
      //B4: Xóa nó khỏi DB
      todoListDatabase.splice(findIndex, 1);
      //B5
      ////Lưu trữ lại sự thay đổi này trong Local Storage
      window.localStorage.setItem(
        "todoListDatabase",
        JSON.stringify(todoListDatabase)
      );

      render();
    };
  }
}
render();

adBtn.onclick = function () {
  if (!input.value) {
    alert("Mời bạn nhập nội dung cụ thể vào");
  } else {
    //B1: Lấy ra nội dung nằm trong ô input
    let content = input.value;
    //B2: Tạo mới đối tượng dũ liệu todo{ id, content, status}
    let todo = {
      id:
        todoListDatabase.length === 0
          ? 1
          : todoListDatabase[todoListDatabase.length - 1].id + 1,
      content: content,
      status: false,
    };
    //B3: Thêm đối tượng dữ liệu đó vào trong DB
    todoListDatabase.push(todo);
    //B4: Phẩn ánh sự thay đổi của dữ liệu trong DB lên trên giao diện ứng dụng
    window.localStorage.setItem(
      "todoListDatabase",
      JSON.stringify(todoListDatabase)
    );
    render();
    input.value = "";
  }
};
