// let addNum = 0;
// let subNum = 1000;

// let auto_1 = setInterval(() => {
//   addNum++;
//   console.log(`addNum: ${addNum}`);
// }, 3000);

// let auto_2 = setInterval(() => {
//   subNum--;
//   console.log(`subNum: ${subNum}`);
// }, 3000);

// 시계 만들기
/* 
1. 1시간을 출력할 공간에 대한 정의
2.  분을 출력할 공간에 대한 정의
3. 초를 출력할 공간에 대한 정의
4. 시간, 분, 초를 출력할 공간에 실제 값을 적용
*/

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let clock = () => {
  const now = new Date();
  hour.innerHTML = now.getHours();
  min.innerHTML = now.getMinutes();
  sec.innerHTML = now.getSeconds();
};

// console.log(hour);
// console.log(min);
// console.log(sec);
setInterval(clock, 1000);
