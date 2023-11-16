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

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
