// console.log(window.localStorage);

// console.log("email", window.localStorage.email);
// console.log("password", window.localStorage.password);

// console.log("Đăng nhập thành công");

// window.localStorage.password = "321321";
// window.localStorage.password = true;
// window.localStorage.profile = JSON.stringify({
//   fullName: "Nguyễn Minh",
//   age: 20,
//   school: "Rikkei Academy",
// }); // Cách này sẽ in ra Objject nếu không dùng JSON nên ta phải dùng JSON.stringify({})

// window.localStorage.hobbies = JSON.stringify([
//   ["Reading Book", "Listen and music"],
// ]);

// let profile = JSON.parse(window.localStorage.profile); //{"fullname",..."}
// console.log("profile:", profile);
// .parse() : CHuyển đổi dữ liệu JSON về dạng javascrip thông thường
// Để lữu trữ dữ liệu vào Local Storage thì ta phải chuyển đổi thành file JSON
// Để lấy dữ liệu từ Local Storage về thì ta chuyển đổi dữ liệu JSON về dnagj JAvascrip thông thường

// getItem: Lấy dữ liệu từ localStorage
//setItem: Tạo dữ liêỵ trên localStorage

//Lấy dữ liệu
let profile = JSON.parse(window.localStorage.getItem("profile"));
console.log(profile);

//Lưu trữ dữ liệu

window.localStorage.setItem(
  "address",
  JSON.stringify({
    number: 20,
    street: "Trần DUy Hưng",
    district: "Ba Đình",
    city: "Hà Nội",
  })
);
