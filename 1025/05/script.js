// 객체 구성요소
// key(키) & value(값) => property(*프로퍼티)

// let book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// console.log(book1);

// let book3 = new Object();

// book3.title = "타입스크립트";
// book3.page = 550;
// console.log(book3);

// let student = {
//   name: "park",
//   score: {
//     history: 85,
//     science: 94,
//     avg: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// let book3 = {
//   title: "노드JS",
//   pages: 360,
//   done: true,
//   buy: function () {
//     console.log("이 책을 사고싶습니다.");
//   },
//   finish: function () {
//     book3.done === false ? console.log("읽는 중") : console.log("완독");
//   },
// };

// let bag1 = {
//   color: "blue",
//   width: 30,
//   height: 50,
// };

// 객체 생성 지금까지와 다른 방법 객체 생성
// 생성자 함수 => 객체 생성

// 붕어빵 틀을 만들자
// 해당 붕어빵 틀을 통해 => 붕어빵 무한 생성가능

// (객체)생성자 함수 = 붕어빵 틀
function Book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finsh = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

let book1 = new Book("자바스크립트", 648, false);
console.log(book1);

// 클래스를 사용하여 객체 만들기

class Book5 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finsh() {
    let str = "";
    this.done = false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

let book6 = new Book5("자바스크립트01", 648, false);
let book7 = new Book5("자바스크립트02", 553, true);

console.log(`${book6.title} - ${book6.pages} - ${book6.finsh()}`);
console.log(`${book7.title} - ${book7.pages} - ${book7.finsh()}`);
