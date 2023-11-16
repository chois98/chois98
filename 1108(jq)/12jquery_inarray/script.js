$(function () {
  let arr1 = ["서울", "대전", "부산", "청주"];
  let arr2 = ["한국", "미국", "일본", "중국"];
  let obj = {
    name: "park",
    area: "서울",
  };

  let idxNum = $.inArray("부산", arr1);
  console.log(idxNum);

  let okArray1 = $.isArray(arr1);
  console.log(okArray1);
  // 배열이면 true 아니면 false
  let okArray2 = $.isArray(obj);
  console.log(okArray2);
  // 배열이면 true 아니면 false

  $.merge(arr2, arr1);
  console.log(arr2);
  // 배열 병합

  let idxNum2 = $("li").index($("#list3"));
  console.log(idxNum2);
  // li tag 에 list3 id값을 인덱스 값으로 가져오기
});
