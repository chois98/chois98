// 전역(Global) 변수 & 지역(Local) 변수 & 블록(Block) 변수
// local 변수 안에서는 global 변수 사용 x
// function sum(a, b) {
//   let result = a + b;
// }

// console.log(result);

// let hi = "hello"; /* global 변수 */

// function greeting() {
//   console.log(hi); /* local 변수 */
// }

// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change(); /* hi 라는 변수에 bye 라는 변수로 재할당 해주는 */
// console.log(hi);

const factor = 5;

function calc(num) {
  return num * factor;
}

{
  let result = calc(10);
  document.write(`result : ${result}`);
}
