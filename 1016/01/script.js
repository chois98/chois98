// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     /* 함수 선언 */
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum} 입니다.`); /*함수 호출 */
// }
// calcSum(); /*함수 실행 */

// // 함수선언 => 함수호출 => 함수 실행

// 매개변수가 존재하는 함수
// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }

// sum(1, 2);

// 디버깅 & 버그 발생
//

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}

calcSum(10);

// let num = parseInt(prompt("몇 까지 더할까요?")); /*  */

// function calcSum(n) {  /* n은 임시적으로 넣어둔 값 */
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {  /* 반복문 */
//     sum += i;
//   }
//   return sum; /*함수를 변수값으로 변경 */
// }

// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

// let num1 = parseInt(prompt("1.숫자")); /* 숫자입력 변수 */
// let num2 = parseInt(prompt("2.숫자")); /* 숫자입력 변수 */

// function multiple(a, b) {
//   /* multiple 곱하기 함수 */
//   return a * b;
// }

// let result = multiple(num1, num2);

// console.log(`두 수를 곱한 결과는 ${result}입니다.`);

// function multiple(a, b = 5, c = 10) {   /* 기본값 */
//   return a * b + c;
// }

// console.log(multiple(2, 4, 8));   /* 인자값 우선 */
// console.log(multiple(2, 4));
