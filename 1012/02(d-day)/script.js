//JS 에서 날짜 정보를 가져올때 사용하는 메서드

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${nowMonth} <br/>`);
// document.write(`현재 월 : ${nowDate} <br/>`);

// let classOpen = new Date(`2023, 08, 22`);
// let theMonth = classOpen.getMonth() + 1;
// let thDate = classOpen.getDate();

// document.write(`<h1>개강 날짜 정보</h1>`);
// document.write(`현재 월 : ${theMonth} <br/>`);
// document.write(`현재 월 : ${thDate} <br/>`);

let today = new Date();
let nowYear = today.getFullYear();

let theDate = new Date(nowYear, 11, 31);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
document.write(`연말 D-day : ${result} 일 남았습니다.`);
