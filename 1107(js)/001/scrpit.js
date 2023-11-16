// console.log("안녕하세요", "지금은", new Date(), "입니다.");
// js사칙연산 가능한 언어이다
// + - * /
// % : A % B = A를 B로 나눈 후 나머지 값을 반환해주는 연산자

// 변수 선언 let / vat / const
// 변하지 않는 상수값 사용 const
// 조금이라도 변함 let
// var 사용 x

// 변수: 일종의 데이터를 담는 바구니
// 바구니 안에는 무엇을 담을 수 있는가?
// 어떤 데이터를 담을수 있는가
// 숫자, 문자, 논리형(*불리언), "객체" > 배열, 함수

// let num1 = 10;
// let str1 = "json"; /* "" -> 문자열 */
// let bln = true;

// let obj = {
//   student: "json",
//   grade: 2,
// };
// let func = () => {
//   console.log(test);
// };

// let a = 1,
//   b = 2,
//   c = 3;

// let / const 차이점
// let : 재선언은 안되지만, 재할당 가능 변수
// const : 재선언, 재할당 모두 불가능한 변수

// let test01 = "test";

// test01 = "test02"; /* 재할당 */

// const test02 = "test";
// test02 = "test03";

// 비교연산자
// A == B a,b가 같다
// A === B  a,b  자료형값 비교
// 부정연산자를 결합한 비교 연산자

// A != B
// A !== B
//

// JS 데이터를 복사해오는 방식이 2가지
// 원시타입 복사, 참조주소 복사
// JS변수를 선언하게되면,선언과 동시에 로컬컴퓨터 내부에 해당 변수만의 고유 주석값이 생성되어 같아 보여도 다르다고 판단

// 재할당
// const test07 = "a";

// const test08 = "b";

// const test07 = test08;

// 대입연산자
let k = 10;
let j = 20;

k += j;

// k= k + j / k=30
