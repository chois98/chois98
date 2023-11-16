// api : application programming interface
// UT / UX
// 일상생활에서 API
// 버스,지하철 (*카카오맵) => API
// HTML5 => API 존재

// 웹 & 앱 서비스 변화
// 가장많이 사용하는 API => 위치기반 서비스
// 기본적으로 탑재되어있는 API => Geolocation / Storage
// 웹에서 클라이언트 & 서버가 서로 데이터를 주고 받을 때,
// 사용할 수 있는 공간! cookie (보안 x)
// 데이터를 저장하고 관리하면서 & 보안까지 신경쓸 수 있는 저장소  = Storage => 얼마나, 어느 기간까지
// 세션 스토리지 : 웹 브라우저 창을 여는 순간 작동 ~ 웹 브라우저 창을 닫는 순간 데이터 모조리 삭제
// 로컬 스토리지 : 아무리 세션이 종료가 되어도 서버 혹은 클라이언트에서 임의로 데이터를 삭제하지 않는다면 영구적으로 보관,관리

// Storage API 객체는 다음과 같은 프로퍼티(*속성) & 메서드(*함수) 를 사용

// length 프로퍼티 : 배열안에 담겨있는 아이템 개수 확인
// setItem() : 스토리지에 자료를 저장할 때 사용할 수 있는 메서드
// getItem() : 스로리지에 저장되어있는 자료를 가져올 때 사용할 수 있는 메서드
// key() : 스토리지에 있는 키를 반환해주는 메서드
// 기본적으로 스토리지에는 key:value 값이 한 쌍으로 보관
// removeItem() : 키 이름을 매개변수 값을 지정할 경우, 해당 키를 삭제
// clear() : 현재 스토리지에 저장되어 있는 모든 키/값을 모두 삭제

let students = ["kim", "lee", "park"];
localStorage.setItem("students", JSON.stringify(students));
// setItem 으로 스토리지 자료에 저장

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}

localData.push("choi");
console.log(`추가 후 students : ${localData}`);

localStorage.setItem("students", JSON.stringify(localData));

const indexOfvalue = localData.indexOf("lee");
localData.splice(indexOfvalue, 1);
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

localStorage.removeItem("students");
