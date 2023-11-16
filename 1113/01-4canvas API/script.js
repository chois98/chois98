// canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간 개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트 좌표계
// 3) 각도 : 호도법(*라디언)  / 육십분법(*도)
//   (파이 / 180도) * 원하는 각도
// 삼각형,원 => 커스텀 마이징
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath(); /* path 값 사용하겟다고 선언 */
// ctx.moveTo(50, 50); /* 좌표 입력 */
// ctx.lineTo(200, 200); /*  */
// ctx.stroke();

// 왼쪽 나비 넥
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100); /* 좌표 */
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();
// 오른쪽 나비 넥
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = "rgb(0,200,200";
ctx.fill();
