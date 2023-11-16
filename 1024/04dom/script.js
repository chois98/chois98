const btn = document.querySelector("#btn");
const notiBox = documen.querySelector("#noti-box");

btn.addEventListener(`clock`, () => {
  const noti = document.createElement("div");
  noti.classList.add("noti");
  noti.innerText = "식사하세요! 주인님";
  notiBox.appendChild(noti);
  setTimeout(() => {
    noti.remove();
  });
});
