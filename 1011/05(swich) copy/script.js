let site = prompt("네이버, 다음, 구글 중 사용하는 포털 사이트는?");
let url;

if (site !== null && site !== "") {
  switch (site) {
    case "구글":
      url = "http://www.gogle.com";
      break;
    case "네이버":
      url = "http://www.naver.com";
      break;
    case "다음":
      url = "http://www.daum.com";
      break;
    default:
      alert("보기중에 없는 사이트 입니다");
  }
}

if (url) {
  location.href = url;
}
