//이미지 드랍을 진행할 공간에 대한 정의
const filezone = document.querySelector(".file-zone");
const imagePreviewArea = document.querySelector(".image-list");

//filezone 영역에 이미지가 드랍되었다는 사실을 알수 있도록 이벤트 정의
filezone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

filezone.addEventListener("drop", (e) => {
  e.preventDefault();
  const transferedFiiles = e.dataTransfer.files;
  displayImages(transferedFiiles);
});
//특정요소를 활용해서 웹 브라우저 안에서 드래그 & 드랍기능을 사용했을 때, 드롭한 해당 요소의 파일 정보를 읽어내는 이벤트 속성이 존재
//e.dataTransfer.files
