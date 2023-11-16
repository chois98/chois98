/* 
1.첫번째 수 입력값 num1
2.두번째 수 입력값 num2
3.계산하기 눌럿을때  1,2번값의 최대 공약수 계산
4.결과 값 위치에 3번 값 출력
 */
const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const getGCD = (f, s) => {
  let max = f > s ? f : s;
  let GCD = 0;
  for (let i = 0; i <= max; i++) {
    if (f % i === 0 && s % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};
