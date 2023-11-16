// 비동기처리 방식

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   /* setTimeOut일정시간 이후에 함수를 실행시키는 함수 */
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
//   // 2초의 시간 지난후 실행 그렇기 때문에 C가 처리후 2초 뒤 B 실행
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);
// display b 에 callback 함수를 이용하여 2초 뒤에 실행되지만 B가 먼저 출력되고 나서 C가 출력되게끔 사용  (JS 비동기식 처리)
// A -> C -> B 순서대로 진행

// *JS에서 비동기처리 방식이 지금까지 봐온 Callback 함수 말고는 없는가?
// 2015년 전까진 Y / 2015년 JS 대개혁의 해 ES6문법 => probise / async & awit
// 구글 크롬 => 검색엔진 V9 => 워낙 JS paring 속도 능력이 워낙 뛰어났다
// 개발자들이 JS를 웹브라우저 안에서만 사용하기가 너무 아깝다
// Node.js => js 런타임(*환경)
// 그동안 기존 Backend 개발자들의 전유물 (*서버 구축, 관리하던 JAVA,C++)
// 굳이 사용하지 않아도 Node.JS 기반에서 JS만으로도 충분히 서버 구축하고 관리할 수 있는 시대
// 프론트엔드개발자 웹 브라우저 화면에서 전개되는 역동적인 페이지 구성
// 회사,기업 => Node.js => 비싼 서버
// 도미노 => 웹 퍼블리셔 / 기존 프론트엔드 개발 리액트 & 제이쿼리 하드코딩
// 백엔드 => 노드, 플러터 => 글로벌 UI 프레임 워크
// 풀스택 (*프론트 + 백)

// 콜백함수를 가진 예문
// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// const display = (result) => {
//   console.log(`${result} 준비완료`);
// };

// order("아메리카노", display);

// 콜백함수를 이용한 비동기 처리방식

// JS 콜백함수를 활용 비동기처리의 취약점
// JS 콜백지옥

// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("stop!");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displayLetter();

// 콜백 지옥을 해소하기 위해서 나온것이 JS 프로미스 객체

// JS 프로미스 객체 (*내장객체)
// date,array, object 등등

let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve(`피자를 주문합니다!`);
  } else {
    reject(`피자를 주문하지 않습니다!`);
  }
});

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료!");
  });
