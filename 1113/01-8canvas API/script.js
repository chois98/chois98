// canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간 개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트 좌표계
// 3) 각도 : 호도법(*라디언)  / 육십분법(*도)
//   (파이 / 180도) * 원하는 각도
// 삼각형,원 => 커스텀 마이징
//
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
ctx.stroke();
