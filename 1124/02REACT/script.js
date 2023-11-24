// 명령형 프로그래밍 코드
const minus = document.querySelector(".Minus");
const plus = document.querySelector(".Plus");
const result = document.querySelector("#result");

minus.addEventListener("click", () => {
  // current 공간에 10진수 기준, 숫자형의 값을 가져와서 저장
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current - 1;
});
plus.addEventListener("click", () => {
  // current 공간에 10진수 기준, 숫자형의 값을 가져와서 저장
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current + 1;
});
