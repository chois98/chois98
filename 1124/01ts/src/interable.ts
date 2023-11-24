// js에서 이터러블객체 학습 => TS이터러블 객체 & 제너레이터 함수
// JS => 이터러블 객체 & 제너레이터 함수 사용 복습 & 심볼

let var1 = Symbol();
let var2 = Symbol();

let result = var1 === var2;

console.log(result);

let id = Symbol();

interface obj {
  name: string;
  [x: symbol]: number | string;
}

const member: obj = {
  name: "park",
  [id]: 12345,
};

console.log(member[id]);

let grade = Symbol("grade");
member[grade] = "VIP";

console.log(member);
