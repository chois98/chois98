const elements = document.querySelectorAll("*");
// console.log(elements);

for (let element of elements) {
  //elements에서 element하나씩 꺼내서 반복해서 이벤트를 주겠다.
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true /* 이벤트 켭처링 (*가장 안쪽 위치한 요쇼부터 가장 아래 위치한 요소가지 이벤트가 적용) */
  );
}
