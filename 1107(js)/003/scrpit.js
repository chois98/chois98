// switch 문
// const myFruit = prompt("사과,귤,감, 중 과일입력");

// switch (myFruit) {
//   case "사과":
//     alert("사과입니다.");
//     break;
//   case "귤":
//     alert("귤입니다.");
//     break;
//   case "감":
//     alert("감입니다.");
//     break;
//   default:
//     alert("기타 과일입니다");
// }

// 반복문 for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while문

// let myNumber = 0;

// while (myNumber < 10) {
//   console.log(myNumber);
//   myNumber += 1;
// }

// continue : 해당 요소를 건너뛰고 이어서 반복문을 실행시키고자 할때 사용
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {   /* i를 2로 나누었을때 0이랑 같다면, 건너뛰기 */
//     continue;
//   }
//   console.log(i);
// }
// const flgA = true;
// const myFunction = (flgA) => {
//   for (let i = 0; i < 10; i++) {
//     if (flgA === false) {
//       continue;
//     }

//     if (i % 2 === 0) {
//       continue;
//     }

//     console.log(i);
//   }
// };
// myFunction(flgA);

// const a = 10;
// const b = 20;

// console.log(a < b);
// console.log(a > b);

// 문자열을 사용할 때, boolean
// include() => 해당 메서드 안에 인자값으로 들어온 문자열이 앞에서 사용중인 객체안에 있으면 true, 없으면 false

// const isIOS = navigator.userAgent.includes("user");
// console.log(isIOS);

// if (isIOS) {
//   alert(`어서오세요 ${user} `);
// }

// const num = Number.MAX_SAFE_INTEGER;
// const num1 = Number.MAX_SAFE_INTEGER;
// console.log(num);
// console.log(num1);

// let user = parseInt(prompt("원하시는 숫자를 입력하세요"));

// if (user !== null || user !== undefined) {
//   if (user < MAX_SAFE_INTEGER) {
//     console.log("A");
//   }
// }

