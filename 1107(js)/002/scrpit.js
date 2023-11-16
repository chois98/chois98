// 함수

// 클래스 함수 함수 형태 ,함수 선언
// function myFunc() {
//   console.log("test");
// }

// 화살표 함수 형태, 함수선언
// const myFunc01 = () => {
//   console.log("test");
// };

// myFunc(); //함수 호출

// 함수안에 return 문이 필요할 때에는 사용자가 함수 안에 어떤 인자값을 전달한 후 그 인자값으로 함수가 어떤 연산작업을 거쳐서 결과값이 나왔는데, 그 결과값을 받고싶을 때

// const myFunc02 = (a) => {
//   /* 인수값 */
//   const result = a + 2;
//   return console.log(result);
// };

// return : 객체 안에서 연산 작업 할때 주로 사용
// myFunc02(1); /* 인자값 */

// 매개변수 = 인자값

// calc함수
// const calcSum = (a, b, c) => {
//   const result = a + b + c;
//   return console.log(result);
// };

// calcSum(1, 2, 3);
// 매개변수를 선호했다면 인자값도 줘야함

// const array = [1, 2, 3, 4, 5];

// const calcFunc = (...number) => {
//   let result = 0;
//   for (let value of number) {
//     result += value;
//   }
//   return console.log(result);
// };

// calcFunc(...array);
// ... -> 전개연산자

// 조건문
let myPrice = prompt("값을 넣어주세요");

if (myPrice >= 50) {
  alert("myPrice는10 50 이상입니다.");
} else if (myPrice >= 10) {
  alert("myPrice는 10이상 50미만입니다.");
} else {
  alert("myPrice는 10 미만입니다.");
}
