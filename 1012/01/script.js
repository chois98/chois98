// let shoeDog = {
//   author: "ph1l knight",
//   category: "social",
//   pages: 500,
//   price: 19800,
// };

// 함수형 생성 방법 (*내장함수)

// let tv = new Object();
// tv.color = "white";
// tv.price = 300000;
// tv.info = function () {
//   document.write(`tv색상 : ${tv.color} <br/>`);
//   document.write(`tv가격 : ${tv.price} <br/>`);
// };

// document.write(`<h1>tv 객체 메서드 호출</h1>`);
// tv.info();

//  속성 설정 방법
// let car = {
//   color: "black",
//   price: 5000000,
//   info: function () {
//     document.write(`car색상 : ${car.color} </br>`);
//     document.write(`car가격 : ${car.price} </br>`);
//   },
// };
// document.write(`<h1>car 객체 메서드 호출</h1>`);
// car.info();

// this 객체

// 객체 & 메서드 : 재활용이 가능한 객체 및 메서드
let test = {
  avg: function (math, science) {
    return math + science;
  },
};

document.write(test.avg(50, 100));

// 객체 & 메서드 : 재활용이 일부가능한 객체 및 메서드

let cloud01 = {
  math: 50,
  science: 100,
  avg: function () {
    return this.math + this.science;
  },
};

document.write(cloud01.avg());

//JS 에서 날짜 정보를 가져올때 사용하는 메서드

let today = new Date();
let nowMonth = today.getMonth();
