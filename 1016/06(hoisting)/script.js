// hoisting - 끌어올리다
// 선호출 되더라도 선언값을 끌어올림
let count = 0;

myFnc();

function myFnc() {
  count++;
  document.write(`hello ${count},<br/>`);
}

myFnc();
theFnc();

let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};

theFnc();
