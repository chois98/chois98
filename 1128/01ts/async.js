// promise 객체를 활용한 비동기처리방식 코드

// function whatsYourFavorite() {
//   let fav = "javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new promises((resolve, reject) => resolve(`Hello,${subject}`));
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

// 위 코드를 async,await 방식으로 변환 비동기 처리
// sync(동기) <-> async(비동기)

// async function whatsYourFavorite() {
//   let fav = "Typescript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  let fav = "nodejs";
}
async function displaySubject(subject) {
  return `hello,${subject}`;
}
// 비동기적으로 실행문을 처리하는 방식의 함수
// 비동기적으로 처리할 때, 유의사항
// 아무리 실행문을 비동기적으로 처리한다고 해도,우선처리 실해을 해야하는 코드가 있다면, 반드 해당 실행문을 먼저 처리 후 다음번 코드를 실행하게끔 한다.
async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}
init();
