const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(188, 67);
// ctx.lineTo(209, 67);
// ctx.lineTo(188, 50);
// ctx.lineTo(198, 73);
// ctx.closePath();
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(310, 100);
ctx.lineTo(120, 250);
ctx.lineTo(190, 30);
ctx.lineTo(280, 250);
ctx.closePath();
ctx.stroke();
