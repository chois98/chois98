// map & set
// js 배열을 주고 언제, 왜 사용했는가?
// 복수의 값을 하나로 묶어서 반복 및 규칙적인 패턴에 의해 처리하고자 할때 => 배열
// 배열의 가장 큰 약점(*feat 객체)

// 배열
let arr = [1, 2, 3, 4, 5];

// 객체
let obj = {
  title: "test",
  author: "park",
  read: function () {
    console.log(`${title}`);
  },
};

// 객체가 할 수 있는 기능을 배열에게도 부여
// +@ 객체가 하지 못하는 기능을 배열에게 주고자 하는 목적 => 2015년도, ES6 문법에서 MAP,set 개념

// 객체에서는 "key"에서는 문자열만 사용할 수 있음 vs map : "key" 영역에 문자열 뿐만 아니라 모든 자료형을 가져가 사용이 가능
// 객체의 가장 큰 약점 : 여러개 값 및 값에 따른 정보를 담을 수 있는 장점 대비,배열처럼 순서를 갖지 못함 / Map은 객체의 기능을 다 가져가면서 태생이 배열이었기 때문에 순서를 매길 수 있음

// 객체의 키 값을 가져올 때에 한해서 한정적으로 사용할 수 있는 반복문 for in 문 / 객체는 for in문을 제외하고서는 그 어떤 반목분을 해서 key,value값을 반복해서 가져올 수 있는 방법x
// Map은 for of / in 문을 활용하여 , key, &value 값을 모두 반복해서 가져올 수 있음

// 객체의 약점 : 배열은 배열안에 담겨 있는 아이템의 개수를 확인가능 arr.length속성을 사용하면 배열개수 확인 가능 / 객체는 아이템 개수를 식별할 수 있는 메서드가 없음 / Map은 객체와 같이 여러 정보를 담으면서도 안에 들어가 있는 아이템 개수 역시 식별가능

// Map()은 JS의 내장객체 => Date() / Object() / Array() => class 생성자 함수로 만들어졌고, 해당 생성자 함수를 사용하는 동시에, 프로토타입의 객체가 생성되고, 해당 프로토타입 객체를 가져다가 인스턴스 객체를 만들어내는 과정을 가진다  JS 의 내장 객체의 특징 => new 예약어를 같이 사용

let bag = new Map();

bag.set("color", "red");
console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["haveHandle", "true"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// 1개의 동일한 객체를 중심으로 해당 객체에 다양한 메서드를 붙여서 사용하고자 할 때 , 마치 자전거 체인과 같은 모양을 띄고 있다 => 메서드 체이닝 기법
// myCup.set("type", "mini");
// myCup.set("type", "mini");
myCup.set("purpose", "daily").set("type", "mini");

console.log(myCup);
console.log(myCup.size);
console.log(myCup.get("color"));
console.log(myCup.get("name"));
console.log(myCup.has("color"));
console.log(myCup.has("name"));
// console.log(myCup.delete("color"));
console.log(myCup);
console.log(myCup.delete("name"));
console.log(myCup.keys);
// console.log(myCup.clear());
// console.log(myCup);

for (let key of myCup.keys()) {
  console.log(key);
}
for (let value of myCup.values()) {
  console.log(value);
}
for (let entry of myCup.entries()) {
  console.log(entry);
}
