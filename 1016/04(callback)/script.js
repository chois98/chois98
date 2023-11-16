// call back 예시
// single thread => 한번에 하나의

// function showData(name, age) {
//   alert(`안녕하세요! ${name}님 나이가 ${age}살 이군요`);
// }

// function getData(callback) {
//   let userName = prompt("이름을 입력하세요!");
//   let userAge = parseInt(prompt("나이를 입력하세요!"));
//   callback(userName, userAge);
// }

// getData(showData);

let sum = (a, b) => a + b;
console.log(sum(2, 10));

function hello() {
  return "안녕하세요!";
}

function bye() {
  return "안녕히가세요!";
}

function userChek(name, fn) {
  console.log(`${name}님`, fn());
}

userChek("홍길동", hello);
userChek("도레미", bye);

let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30, 20) : ${init()}`);
