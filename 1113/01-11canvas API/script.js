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

ctx.scale(1, 0.7);

ctx.fillStyle = "aqua";
ctx.strokeStyle = "aqua";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(120, 80, 5, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.strokeStyle = "white";

ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);

ctx.stroke();
