/* 
1. id year 값 입력
2. month 값 입력
3. date 값 입력
4. 계산 = 현재 날짜 - 1,2,3값 
5. 결과값 result 에 출력되어 표기
*/
// const year = document.querySelector("#year");
// const mon = document.querySelector("#month");
// const date = document.querySelector("#date");

// const today = new Date();
// console.log(today.getTime());
const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultYears = document.querySelector("#years");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  let passed = today.getTime() - birthDay.getTime();
  let passedYear = Math.floor(passed / (1000 * 60 * 60 * 24 * 30 * 12));

  resultYears.innerText = `내가 태어난지 ${passedYear}년이 지났습니다! 부모님 감사합니다`;
});
