//js를 기반으로 하는 초경량 js애니메이션 전문 라이브러리
anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  background: "#f86",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});
anime({
  targets: ".box2",
  translateX: 280,
  translateY: 300,
  duration: 1000,
  delay: 1000,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
  background: "#ff9",
});
anime({
  targets: ".box3",
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    duration: 10000,
  },
  borderRadius: "30%",
  background: "#F85",
});
