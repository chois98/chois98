let xhr = new XMLHttpRequest();
let jsonTest01 = xhr.open("get", "student-2.json", true);
let jsonTest02 = xhr.send(); /* json 데이터를 가져오려면 입력 */
let renderHTML = (contents) => {
  let output = "";
  for (let content of contents) {
    output += `
    <h2>${content.name}</h2>
    <ul>
      <li>히트곡 : ${content.music}</li>
      <li>나이 : ${content.year}</li>
    </ul>
    `;
  }
  document.querySelector("#result").innerHTML = output;
};
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let students = JSON.parse(xhr.responseText);
    /* JSON파일을 객체로 바꾸고싶을땐 parse */
    renderHTML(students);
    // let result = document.querySelector("#result");
    // result.innerText = `${students.name} ${students.music} ${students.year}`;
  }
};
