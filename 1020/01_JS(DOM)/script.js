const title = document.querySelector("#title");
const pfImg = document.querySelector("#profile img");
const userName = document.querySelector("#desc .userName");

title.onclick = () => {
  // title.innerHTML = "프로필";
  // title.style.background = "#000";
  // title.style.color = "#fff";
  // title.classList.remove("clicked"); //css에서 정의한 스타일

  //조건문
  // if (!title.classList.contains("clicked")) {
  //   title.classList.add("clicked");
  // }else {
  //   title.classList.remove("clicked");
  // }
  //클린코드
  title.classList.toggle("clicked");
};
pfImg.onclick = () => {
  pfImg.src = "/img5/2/pf2.png"; //src = "img" , 키값 = "value"
};
userName.onclick = () => {
  userName.innerHTML = `이름 : <b>영심이</b>`; //가지고 오려는 요소가 있다면 (<b>처럼) innerHTML사용.
  userName.style.color = "#f00";
};

//document에서 특정 클래스 값을 가지고 있는 노드를 찾게 되었을때에만 이벤트를 적용하고 싶다!
