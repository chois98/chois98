// promise JS 내장객체 => class 생성자 -> prototype 함수 => protortpe 객체 -> instance객체 생성
const pizza = new Promise((resolve, reject) => {
  if (false) {
    resolve("피자를 주문합니다");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});

console.log(pizza);

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료");
  });
