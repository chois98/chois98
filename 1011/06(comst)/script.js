// const students = ["park", "kim", "Lee", "Kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, <br/>`);
// }

// let colors = ["red", "blue", "green", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   document.write(`${colors[i]} <br/><br/>`);
// }

// const students = ["park", "kim", "Lee", "Kang"];

// // class형 함수
// students.forEach(function (student) {
//   document.write(`${student} <br/>`);
// });
// // 화살표 함수
// students.forEach((student) => {
//   document.write(`${student} <br/>`);
// });

// const gitBook = {
//   title: "깃 & 깃허브 입문",
//   pubDate: "2023-10-11",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]} </br>`);
// }
const students = ["park", "kim", "Lee", "Kang"];

for (student of students) {
  document.write(`${students} <br/>`);
}
