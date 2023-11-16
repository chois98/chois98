// let displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// js에서 비동기처리방식 마지막 3번째 방법 : async 함수

// async function displayHello01() {
//   console.log("Hello");
// }

// displayHello01();

async function whatsYourFavorite() {
  // async 삽입시 promise 따로 사용 x
  let fav = "Javascript";
  return fav;
}

async function displaySubject(Subject) {
  return `Hello, ${Subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}
// await 앞에 출력이 끝나면 실행이 되게끔
init();
/*
whatsYourFavorite().then(displaySubject).then(console.log);
*/
