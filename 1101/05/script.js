// 상담 신천과목 리스트를 하단 최종 신청 과목 영역에 출력 되도록 단 각 member들이 중복해서 신청한 값이 존재한다면 1번만 출력되도록 설정
const result = document.querySelector("#result");
const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JAVASCRIPT"];
const member3 = ["JAVASCRIPT", "Typescript"];

console.log(member3);

const subjects = [...member1, ...member2, ...member3];
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
