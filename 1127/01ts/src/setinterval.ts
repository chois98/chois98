// 생성기와 동일한 결과값을 만들어내는 setInnterval 함수
// 세미코 루틴 = semi-coroutine

const period = 1000;
let count = 0;
console.log("program started...");

const id = setInterval(() => {
  if (count >= 3) {
    clearInterval(id);
    console.log("program finished...");
  } else {
    console.log(++count);
  }
}, period);
