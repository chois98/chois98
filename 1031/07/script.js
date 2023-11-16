let a = parseInt(prompt("첫번째 숫자"));
let b = parseInt(prompt("두번째 숫자"));
let c = parseInt(prompt("세번째 숫자"));

let numTotal = (a, b, c) => {
  let result;
  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }

  return result;
};

document.write(numTotal(a, b, c));
