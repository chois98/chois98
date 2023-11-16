const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "xor";
// xor
// copy 나중에 작성된 도형만 살아남음
/* lighter 2개의 색상이 합쳐진 색상 */
// source-over / source-in / source-out / source-atop
// destination-over / destination-in / destination-out / destination-atop

// source
ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
