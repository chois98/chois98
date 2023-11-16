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

let triangle = new Path2D();

triangle.moveTo(100, 100);
triangle.moveTo(300, 100);
triangle.moveTo(200, 260);
triangle.closePath();

ctx.stroke(triangle);

let circle = new Path2D();
circle.arc(200, 155, 50, 0, (Math.PI / 180) * 180 * 2, true);

ctx.fillStyle = "green";
ctx.fill(circle);
