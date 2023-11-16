// 사용자가 input에 특정 이메일을 입력한다고 가정했을때,버튼 클릭 시 해당 이메일의 @ 문자열을 기준으로 앞에서 3개의 단어까지는 **처리가 되어 출력 될수 있도록 코드 완성
const email = document.querySelector("#email");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;
    userName = userName.substring(0, 3);
    userName = userName.substring(0, userName.length - half);
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
