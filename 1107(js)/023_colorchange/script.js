// const btn = document.querySelector(".button");
// const rec = document.querySelector(".rectangle");

// // btn.addEventListener("click", () => {
// //   rec.style.background = "#ddd";
// // });

// btn.addEventListener("click", () => {
//   rec.classlist.toggle(co);
// });

// btn 누를때 랜덤 색 변경
const rectangle = document.querySelector(".rectangle");
const button = document.querySelector(".button");

const onClickbutton = () => {
  const randomHue = Math.trunc(Math.random() * 361);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  console.log(randomHue);
  rectangle.style.setProperty("--start", randomColorStart);
  rectangle.style.setProperty("--end", randomColorEnd);
};

button.addEventListener("click", onClickbutton);
