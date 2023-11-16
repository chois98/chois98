// let student = {
//   name: "슛돌이",
//   major: "체육교육학과",
//   grade: 2,
// };

// let json = JSON.stringify(student);
// console.log(json);

// let member = '{"name":"영심이", "age":30, "hobby":"swimming"}';

// console.log(member);

// let member_obj = JSON.parse(member);
// console.log(member_obj);

// 클라이언트가 서버에 존재하는 json 데이터를 가져오는 방법
// AJAX 방법
// Asynchronous Javascript And XML
// Asynchronous : 비동기
// 동기 ex) 커피집에서 1번째 주문과 전달이 끝나야 2번째가 주문->처리가 가능 false
// 비동기 ex) 1번째 주문을 제작하며 2번째 주문을 받을수 있는것 true

// 내부 API 객체를 활용하여 AJAX 방식으로
// 클라이언트 & 서버가 소통할 수 있음

// XML 사용
let xhr = new XMLHttpRequest();

let jsonTest01 = xhr.open("GET", "student.json", true);
let jsonTest02 = xhr.send();
console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("success!");
    let students = JSON.parse(xhr.responseText);
    console.log(students);
    let result = document.querySelector("#result");
    result.innerTEXT = `${students.name}학생은 ${students.grades}학년입니다.`;
  }
};
