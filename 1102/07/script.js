// let xhr = new XMLHttpRequest();
// let url = "https://reqres.in/api/products/10";

// xhr.open("get", url, true);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let students = JSON.parse(xhr.responseText);
//     let result = document.querySelector("#result");
//     result.innerHTML = `상품명: ${students.data.name} 생산년도: ${students.data.year}`;
//     // console.log(students.data.name);
//   }
// };

let url = "https://reqres.in/api/products/10";
let result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open("get", url, true);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p>상품명: ${product.data.name}</p>
    <p>생산년도: ${product.data.year}</p>
    `;
  }
};
