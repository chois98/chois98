// 제이쿼리 선택자
// 직접 선택자 & 인접 선택자
// 탐색 선택자
// 1)위치탐색 선택자
// 2)$(요소선택자: first) : 요소선택자에서 첫번째 요소를 가져오는것
// 3)$(요소선택자:last) : 요소선택자에서 마지막번째 요소 가져오는것
// 4)$(요소선택자:odd) : 요소선택자에서 홀수번째 요소(*홀수 인덱스 = 아이템 순서 짝수)를 가져오는것
// 5)$(요소선택자:even) : 요소선택자에서 짝수번째 요소(*짝수 인덱스 =아이템 순서 홀수) 를 가져오는 것
// $(요소선택자:first-of-type) : 요소산택자 무리중에서 첫번째 요소를 선택
// $(요소선택자:last-of-type) : 요소선택자 무리 중에서 마지막번째 요소를 선택
// $(요소선택자:nth-child(숫자)) : 요소선택자 특정 번째 요소 선택
// $(요소선택자:nth-child(숫자n)) : 요소선택자 중에서 해당 숫자의 배수 요소 선택
// $(요소선택자:nth-last-of-type(숫자)) : 요소선택자 무리중에서 마지막 위치를 기준으로 해당 숫자번째 요소를 선택
// $(요소선택자: only-child) : 부모 요소중에서 요소가 1개뿐인 요소를 찾아
// $(요소선택자: omly-child) : 부모 요소중에서 요소가 1개뿐인 요소를 찾아
// $(요소선택자: eq(인덱스 번호)) : 요소선택자 중에서 인덱스 벊를 가지고 있는 요소를 찾아
// $(요소선택자:gt(인덱스번호)) : 요소선택자 중에서 해당 인덱스보다 큰 인덱스 요소를 불러올때 사용
// $(요소선택자:lt(인덱스번호)) : 요소선택자 중에서 해당 인덱스 보다 작은 인덱스 요소를 불러올때 사용
// $(요소선택).slice(인덱스 번호) : 요소선택자 중에서 인덱스 번호부터 참조하는 요소를 불러올때 사용

// $(function () {
//   $("#menu li:first").css({
//     baground: "#ff0",
//   });
// });
$(function () {
  //   $("#menu li:last").css({
  //     baground: "#0f0",
  //   });
  // });

  // $("#menu li:even").css({
  //   background: "#ff0",
  // });
  // $("#menu li:odd").css({
  //   background: "#0ff",
  $("#menu li").eq(2).css({
    background: "#ff0",
  });
  $("#menu li:gt(2)").css({
    background: "#f0f",
  });
});
