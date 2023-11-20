const major = document.querySelector("#major").options;

const displayselect = () => {
  let selectedText = major.options[major.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다.`);
};

major.addEventListener("change", displayselect);
