// const img = document.querySelector("img");
// console.log(img);
// box.addEventListener("hover", (e) => {});

const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => {
  imgBox.src = "/img/2/pic-6.jpg";
});
imgBox.addEventListener("mouseout", () => {
  imgBox.src = "/img/2/pic-1.jpg";
});
