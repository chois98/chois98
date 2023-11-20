// const ul = document.querySelector("ul");
// const fragment = document.createDocumentFragment();
// console.log(fragment);
// const nine = 9;

// for (let i = 0; i < nine; i++) {
//   const li = document.createElement("li");
//   fragment.appendChild(li);
// }

// ul.appendChild(fragment);

// 27개 만들기
const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = row * col;
console.log(allElem);

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}
staggerWrap.appendChild(fragment);

// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.1, 1], { grid: [9, 5], from: "center", axis: "z" }),
// });

const t1 = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
  loop: true,
  direction: "alternate",
});

t1.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutSine", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
});
