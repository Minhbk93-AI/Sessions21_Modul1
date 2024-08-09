let todoListDB = [
  {
    id: 1,
    content: "Đi ngủ sớm đi",
    status: false,
  },
  {
    id: 2,
    content: "Đọc sách, lập trình 8 tiếng/ ngày",
    status: true,
  },
  {
    id: 3,
    content: "Ăn uống đủ no",
    status: true,
  },
  {
    id: 4,
    content: "Ngủ",
    status: false,
  },
];

//B1: Hiển thị ra màn hình
//B1.1: có thẻ ul(id=..)
//B1.2: Hiển thị ra màn hinh các todo mẫu: lặp qua data để tạo các thẻ li mô tả todo xong gán nó vào trong ul
const todoList = document.getElementById("myUL");
const submitTodo = document.getElementById("myInput");
function renderTodo() {
  for (let i = 0; i < todoListDB.length; i++) {
    // logic: tạo các thẻ li
    StringHTML += `
                <li class="${todoListDB[i].status ? "red" : "xanh"}"
                onclick="doiStatus(${todoListDB[i].id})">
                ${todoListDB[i].content}
                <button onclick="xoaItem(${todoListDB[i].id})"> Xóa</button>
                
                </li>`;
  }
  todoList.innerHTML = StringHTML;
}
renderTodo();

function xoaItem(idCanxoa) {
  let viTriXoa = todoListDB.findIndex(function (todo) {
    return (todo.id = idCanxoa);
  });
  todoListDB.splice(viTriXoa, 1);
  renderTodo();
}

function doiStatus(idCanDoi) {
  let viTriDoi = todoListDB.findIndex(function (todo) {
    return (todo.id = idCanDoi);
  });
  todoListDB[viTriDoi].status = !todoListDB[viTriDoi].status;
  renderTodo();
}
submitTodo.onclick = function () {
  const todo = document.getElementById("addBtn").value;
  const newTodo = {
    id: Math.random() * 99999,
    todo: todo,
    status: false,
  };
  todoListDB.push(newTodo);
  renderTodo();
  document.getElementById("addBtn").value = "";
};
