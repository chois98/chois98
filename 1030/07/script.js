// 사용자로부터 영문 소문자로 구성된임의의 문자열을 받습니다.
// 사용자로부터 받은 그 임의 문자를 첫번째 단어만 대문자로 출력하게하고, 나머지 문자는
// 소문자로 출력하게 해주세요
// ex웹 브라우저 출력 : hello everyonw

/* 

const string = prompt("영문 소문자로 문자열을 입력하세요!");
const firstCh = string[0].toUpperCase();
const remainCh = string.slice(1);
const result = firstCh + remainCh;
document.write(result);
*/

const result01 = [string[0].toUpperCase(), ...string.slice(1)];
