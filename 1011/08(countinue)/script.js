// let n = parseInt(prompt("1보다 큰 숫자를 입력하세요!"));
// let sum = 0;

// if (n !== null && n > 1) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       continue;
//     }
//     sum += i;
//     document.write(`${i} ---- ${sum} <br/>`);
//   }
// }

// let num = parseInt(prompt("숫자입력"));
// if (num !== )

/*
1.사용자가 입력한 값을 저장할 변수 정의
2.소수인지 아닌지 판단할 수 있는 연산 정의
3.해당 연산이 끝났을 때, 결과겂을 출력할 수 있게 하는 조건문에 대한 정의
*/

// const number = parseInt(parent("자연수를 입력하세요"));
// let isPrime;

// if (number === 1) {
//   document.write(`${number}은 소수도,합성수도 아닙니다.`);
// } else if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }

//   if (isPrime) {
//     document.write(`${number}는 소수입니다!`);
//   } else {
//     document.write(`${number}는 소수가 아닙니다.`);
//   }
// }

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]} <br/>`);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write(`<p class='red'>${i}</p>`);
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write(`<p class='green'>${i}</p>`);
//   } else if (i % 7 == 0 && i % 5 == 0) {
//     document.write(`<p class='blue'>${i}</p>`);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열 <br/>`);
//   }
//   document.write("<br/>");
// }

// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= 5; K++) {
//     document.write(i * k);
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   document.write(`<h2>[${a}단]</h2>`);
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${a} x ${b} = ${a * b} <br/>`);
//   }
// }

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}
t += `</table>`;

document.write(t);
