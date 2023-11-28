// js는 동기/ 비동기
// 동기: 한번에 하나씩 무언가를 처리
// 비동기: 한번에 하나씩 해야하는 일들을 동시에 여러개를 진행할수 있는 것처럼 만들어주는 방식
// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();

// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   setTimeout(() => {
//     console("B");
//   }, 2000);
// }
// function displayC {
//   console.log("C")
// }

function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback;
  }, 2000);
}

function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);
