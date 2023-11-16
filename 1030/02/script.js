// 배열, 반복문 => 프로그래밍 언어의 근간
// 중추역할
// 배열은 다른 요소보다 "메서드 혹은 속성"

// 배열을 합치는 예시
// let vegitable = ["양상추", "토마토", "피클"];
// let meat = ["불고기"];

// let meatBurger = vegitable.concat(meat, "빵");
// console.log(meatBurger);

// 전개연산자 ...
let vegitable = ["양상추", "토마토", "피클"];
let cheese = ["모짜렐라", "슈레드"];

let cheeseBurger = ["빵", ...vegitable, ...cheese];
console.log(cheeseBurger);

// 배열 요소 정렬하는 메서드
let numbers = [6, 9, 3, 21, 18];
console.log(numbers.reverse());

// 배열요소를 크기에 따라 정렬
let week = ["sun", "mom", "tue"];
let values = [5, 20, 3, 11, 4, 15];

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

// console.log(values);

values.sort((a, b) => {
  return a - b;
});

console.log(values);
