// console.log(elements);
for (let element of elements) {
  //elements에서 element하나씩 꺼내서 반복해서 이벤트를 주겠다.
  element.addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
