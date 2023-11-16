// APT 라는 것에 대한 사전적 정의를 학습
// 무조건 외부에서만 데이터를 가져오는것이 아니다
// WEB 영역안에 기본적으로 사용할 수 있는 API가 있다
// 대표적으로 내장 API중 첫번째, storage API
// Geolocation => 위치 추적해주는 API

// getCurrentPosition : 사용자의 현재 위치를 추적해주는 메스드(함수)
// watchPosition : 지정한 시간마다 위치 확인해주는 메서드
// clearWatch : 위치파악을 요청했으나, 특정 시간이 지나면 위치 파악을 멈추게 하는 메서드

let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 : </b> ${position.coords.latitude.toFixed(
    2
  )},<b>경도 : </b> ${position.coords.longitude.toFixed(2)}
  `;
};

let errorPosition = (err) => {
  alert(err.message);
};

const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    let watchId = navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchID);
    }, 300000);
  } else {
    alert("지오로케이션을 지원하지 않습니다!");
  }
});
