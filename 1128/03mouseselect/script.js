// JS 인터랙티브ㅡ한 페이지
// 주로 반복적으로 사용되는 JS문법 패턴
// 마우스 및 페이지 스크롤의 좌표값
// 마우스가 이동하게 되었을 때, mousemove 이벤트처리
// 출력되는 값:
// clientX,clientY => 현재 내가 보고있는 웹브라우저 화면안에서의 좌표값
// pageX,pageY => 만약 내가 현재 작업중인 문서의  height값이 5000픽셀이라면 현재 내 눈에 보여지지 않는 영역까지도 좌표값을 찾아와주는 값
// screenX,screenY => 듀얼모니터 사용시 첫번째 메인모니터의 좌측상단 값을 0,서브 모니터으 좌측 상단값은 메인모니터의 좌표값

const cursorItem = document.querySelector(".cursorItem.circle");
const buttonAll = document.querySelectorAll("a");

let x = 0;
let y = 0;
const speed = 0.5;

buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursorItem.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    cursorItem.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px,${targetY}px)`;
  window.requestAnimationFrame(loop);
};

loop();
