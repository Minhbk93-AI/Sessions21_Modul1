// const productDetails = [
//   {
//     id: 1,
//     name: "Airpods Pro",
//     price: 24900,
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
//     qty: 10,
//     heading: "Wireless Noise Cancelling Earphones",
//     des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
//   },
//   {
//     id: 2,
//     name: "Apple Watch",
//     price: 40900,
//     imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
//     qty: 15,
//     heading: "You’ve never seen a watch like this",
//     des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
//   },
//   {
//     id: 3,
//     name: "Macbook Pro",
//     price: 199900,
//     imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
//     qty: 20,
//     heading: "The best for the brightest",
//     des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
//   },
//   {
//     id: 4,
//     name: "iPhone 11 pro",
//     price: 106600,
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
//     qty: 35,
//     heading: "Pro cameras. Pro display. Pro performance",
//     des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
//   },
//   {
//     id: 5,
//     name: "iPad Pro",
//     price: 71900,
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
//     qty: 25,
//     heading: "Your next computer is not a computer",
//     des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
//   },
// ];

// let productDetail = window.localStorage.setItem(
//   "productDetails",
//   JSON.stringify(productDetails)
// );
// console.log(productDetail);
let productDetail = JSON.parse(window.localStorage.getItem("productDetails"));
let cart = JSON.parse(window.localStorage.getItem("cart"));
let carQty = document.querySelector(".total-qty");

function renderCart() {
  let totalProduct = cart.reduce(function (acc, cur) {
    return (acc += cur.number);
  }, 0);
  carQty.innerHTML = totalProduct;
}

console.log(productDetail);
let card = document.getElementsByClassName("main-cart");
function render() {
  stringHTML = "";
  for (let i in productDetail) {
    stringHTML += `
    <div class="card" >
      <div class="top-bar">
        <i class="fab fa-apple"></i>
        <em class="stocks">In Stock</em>
      </div>
      <div class="img-container">
        <img class="product-img" src=${productDetail[i].imageUrl} alt="" />
        <div class="out-of-stock-cover">
          <span>Out Of Stock</span>
        </div>
      </div>
      <div class="details">
        <div class="name-fav">
          <strong class="product-name">${productDetail[i].name}</strong>
          <button class="heart">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        <div class="wrapper">
          <h5>Your next computer is not a computer</h5>
          <p>
            It’s a magical piece of glass. It’s so fast most PC laptops can’t
            catch up. And you can use it with touch, pencil, keyboard and now
            trackpad. It’s the new iPad Pro.
          </p>
        </div>
        <div class="purchase">
          <p class="product-price">${productDetail[i].price}</p>
          <span class="btn-add">
            <div>
              <button class="add-btn" id="${productDetail[i].id}">
                Add <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>; `;
  }
  card[0].innerHTML = stringHTML;

  let addBtns = document.getElementsByClassName("add-btn");
  console.log(addBtns);

  for (let addBtn of addBtns) {
    addBtn.onclick = function () {
      // console.log(addBtn.id); //
      // Tìm ra được vị trí của phần tử đang muốn add vào giỏ hàng
      let addProductIndex = productDetail.findIndex(function (e, i) {
        return e.id === +addBtn.id;
      });
      // console.log(addProductIndex);

      //     let cart1 = JSON.parse(window.localStorage.getItem("cart"));
      //     let findIndex = productDetail.findIndex(function (el) {
      //       return el.id === id;
      //     });
      //     // for (let i in productDetail) {
      //     //   let product = document.getElementById(`${i}`);
      //     //   cart.push(product);
      //     //   let cart = window.localStorage.setItem("cart", JSON.stringify(cart));
      //     // }
      //     if (findIndex !== -1) {
      //       cart1.push(productDetail[findIndex]);
      //       window.localStorage.setItem("cart", JSON.stringify(cart1));
      //     } else {
      //       console.error("Product not found");
      //     }
      //     // cart1.push(productDetail[findIndex]);
      //     // window.localStorage.setItem("cart1", JSON.stringify(cart1));
      //   };
      let product = { ...productDetail[addProductIndex] };
      console.log(product);
      let inCartIndex = cart.findIndex(function (e, i) {
        return e.id === product.id;
      });

      if (inCartIndex === -1) {
        //Chưa có trong giỏ hàng
        product.number = 1;
        cart.push(product);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      } else {
        //Trong giỏ hàng rồi
        cart[inCartIndex].number = cart[inCartIndex].number + 1;
        window.localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    };
  }
}
render();
renderCart();
