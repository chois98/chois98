const seed = document.querySelector("#seed");
// 총원
const total = document.querySelector("#total");
// 뽑을 인원수
const raffle = document.querySelector("#raffle");
// console.log(raffle);
const result = document.querySelector("#result");

raffle.addEventListener("click", (e) => {
  e.preventDefault(); /* 이벤트 효과 반응 */
  let winner = "";
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner += `${picked}번, `;
  }

  result.innerText = `선발된 팀원 : ${winner}`;
});
