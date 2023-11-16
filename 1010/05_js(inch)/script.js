// Symbol() : 함수 / 객체!!
// 자바스크립트 함수 => 객체로 만들어놓은 프로토타입
// let id = Symbol();

// const member = {
//   name: "kim",
//   [id]: 12345,
// };
// // 느슨한 자료형
// let one = "20";
// let two = 10;
// let sum = one + two;
// let sum01 = one - two;

// console.log(one + two);
// console.log(sum01);

// Number(one);

let inch = parseFloat(prompt("숫자를 입력해주세요."));

let cm = inch * 2.54;
alert(`변환 결과: ${inch}inch는 ${cm}cm입니다!`);
