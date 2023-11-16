/*
삼각형이 될 수 있는 조건
2개의 변의 합이 가장 큰 변의 값보다 작으면 삼각형이 될수 없다
길이가 서로 다른 a,b,c 세개의 변 값

*/

let a = parseInt(prompt("숫자"));
let b = parseInt(prompt("숫자"));
let c = parseInt(prompt("숫자"));

let solution = (a, b, c) => {
  let max;
  let answer = "Yes";
  let total = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if (total - max <= max) {
    answer = "No";
  }

  return answer;
};

console.log(solution(a, b, c));
