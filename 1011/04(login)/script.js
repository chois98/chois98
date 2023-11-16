// let x = 10;
// if (x > 5) {
//   console.log(`x는 5보다 큽니다!`);
// }
// let y = 10;
// if (y < 5) {
//   console.log(`y는 5보다 작습니다.`);
// }
// y -= 5;

// console.log(y);

// let userInput = prompt("이름을 입력하세요!");

// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// if 조건문
// let score = parseInt(prompt("SCSS시험점수: "));

// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }
// let userInput = prompt("이름을 입력하세요!");

// if (userInput !== null) alert(userInput);

// let userNumber = parseInt(prompt("숫자를 입력하세요!"));

// if (userNumber !== null || userNumber !== undefined) {
//   userNumber % 2 === 0
//     ? alert(`${userNumber} : 짝수`)
//     : alert(`${userNumber} : 홀수`);
// }
// let result = confirm("정말로 회원을 탈퇴하시겠습니까")

// if (result) {
//   document.write("정상적으로 탈퇴처리 되었습니다!")
// }else {
//   document.write("정상적으로 탈퇴처리 되었습니다")
// }else {
//   document.write("탈퇴취소 처리 되었습니다.")
// }

// 조건값을 정의할 수 있는 변수
// 사용자로부터 id pw 값을 받아서 정의할수 있는 변수
// 사용자로부터 받은 해당 값과 조건값이 일치하는지 평가

let id = "ezen";
let pw = "1234";

let user_id = prompt("당신의 아이디는?");
if (id == user_id) {
  let user_pw = prompt("당신의 비밀번호는?");
  if (pw === user_pw) {
    alert(`${user_id}님 반갑습니다!`);
  } else {
    alert(`${user_id}님 비밀번호가 일치하지 않습니다!`);
  }
} else {
  alert(`아이디가 일치하지 않습니다.`);
  location.reload();
}
