let today = new Date();
let currentYear = today.getFullYear();
let birthYear = prompt("태어난 년도를 입력하세요!");
let age = currentYear - birthYear + 1;

document.write(`당신의 나이는 ${age} 입니다.`);
