/*
우측 상단 버튼을 클릭했을 때, 배경 색상과 글자 색상을 변경한다
1.우측 상단 버튼에 대한 정의(노드) 필요
2.버튼을 클릭했을때, 이벤트(계획,실행) 정의
3.이벤트(*배경색상,글자색상) 자체에 대한 정의 필요(가상클래스를 활용하여 미리 스타일을 적용)
4.이벤트가 실행되면, 버튼텍스트 요소를 변경 필요
*/

const btn = document.querySelector("button");
const body = document.querySelector("body");

// 버튼이 클릭되었을때 반응
btn.onclick = () => {
  document.body.classList.toggle("dark");
  if (btn.innerText == "다크모드") {
    btn.innerText = "라이트모드";
  } else if (btn.innerText == "라이트모드") {
    btn.innerText = "다크모드";
  }
};
