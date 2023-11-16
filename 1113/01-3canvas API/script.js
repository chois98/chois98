// canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간 개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트 좌표계
// 3) 각도 : 호도법(*라디언)  / 육십분법(*도)
//   (파이 / 180도) * 원하는 각도
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0 ,0)";
ctx.fillRect(10, 10, 200, 100);
ctx.strokeStyle = "#000";
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100);
ctx.clearRect(70, 80, 80, 45);
