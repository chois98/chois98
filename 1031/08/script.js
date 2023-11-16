/* 
자연수 N이 입력되면 1부터 N 까지의 합 

*/
let a = parseInt(prompt("숫자"));

let s = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};
