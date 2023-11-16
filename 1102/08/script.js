// input 태그안에 아무 숫자나 입력 했을 때, 만약 10보다 크면, 아래 result 영역에 해당 숫자가 출력 되게 하고, 만약 10보다 크면, 알림창을 활용하여 10보다 작은수를 입력하세요! 라는 메세지를 출력해주시고,만약 숫자가 입력되지 않은 상태에서 버튼을 클린한다면,숫자를 입력해주세요 라는 알림메세지가 나오도록 해주세요

const button = document.querySelector("form > input");
const userNumber = document.querySelector("#user-number");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let n = userNumber.value;
  try {
    if (n === "" || isNaN(n)) {
      throw `숫자를 입력하세요!`;
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw `10보다 작은 수를 입력하세요`;
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
});
