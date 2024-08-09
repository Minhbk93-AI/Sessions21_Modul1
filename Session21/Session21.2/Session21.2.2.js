let todoListDatabase = [
  {
    id: 1,
    content: "Đi ngủ sớm đi",
    status: false,
  },
  {
    id: 2,
    content: "Đọc sách, lập trình 8 tiếng/ ngày",
    status: false,
  },
  {
    id: 3,
    content: "Ăn uống đủ no",
    status: false,
  },
  {
    id: 4,
    content: "Ngủ",
    status: false,
  },
];

const ul = document.getElementById("myUL");

function render() {
  for (let idx in todoListDatabase) {
    let li = todoListDatabase[idx].status
      ? `<li id=${todoListDatabase[idx].id} class="checked">${todoListDatabase[idx].content} </li>
         <span class="close">×</span></li>`
      : ` <li>${todoListDatabase[idx].content}</li>
      <span class="close">×</span></li>
      `;
    ul.innerHTML = ul.innerHTML + li;
  }
}
render();

let liList = ul.children;
for (let li of liList) {
  li.onclick = function () {
    let findIndex = todoListDatabase.findIndex(function (el, id) {
      return (el.id = +li.id);
    });
    todoListDatabase[findIndex].status = !todoListDatabase[findIndex].status;
  };
  render();
}

let spanList = document.getElementsByClassName("close");
for (let delBtn of spanList) {
  delBtn.onclick = function () {
    let li = delBtn.parentElement;
    let id = li.id;

    let findIndex = todoListDatabase.findIndex(function (el, i) {
      return (el.id = id);
    });
    todoListDatabase.splice(findIndex, 1);
  };
  render();
}
