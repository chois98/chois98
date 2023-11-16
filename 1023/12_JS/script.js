/*
1.제목 , 저자 영역에 값을 넣고, 저장하기를 누르면 샘플이라고 되어있는 영역에 해당값이 출력 되어야 한다
2.출력된 값 오른쪽에 "삭제"버튼이 생성되어야 한다.
3."삭제"버튼을 클릭했을 경우,해당 요소가 삭제 되어야 한다
*/
const title = document.querySelector("#title");
const author = document.querySelector("#autor");
const save = document.querySelector("#save");
const bookList = document.querySelector("bookList");

save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>
  `;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButtons"){

    for(let delButton of delButtons) {
      delButton.addEventListener("click",removeItem) 
    }
});
function removeItem {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}