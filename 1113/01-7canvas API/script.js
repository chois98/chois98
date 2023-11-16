// canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간 개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트 좌표계
// 3) 각도 : 호도법(*라디언)  / 육십분법(*도)
//   (파이 / 180도) * 원하는 각도
// 삼각형,원 => 커스텀 마이징
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// arc(x,y,r, 시작각도 "래디언",종료각도"래디언",반시계방향으로 = 기본)

// // 타원을 만드는 첫번째 방법
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

// 타원을 만드는 두번째 방법
ctx.scale(1, 0.7);
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 180 * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 180 * 2, false);
ctx.stroke();
ctx.closePath();
