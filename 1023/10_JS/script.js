const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");

  srcNode.value = "/09js/nike.JPG";
  let textNode = document.createTextNode(title.innerText);

  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "00f";
  orderInfo.appendChild(newImg);
  orderInfo.appendChild(newP);
});

let newImg = document.createElement("img");
let srcNode = document.createAttribute("src");
srcNode.value = "/09js/nike.JPG";
newImg.setAttribute(srcNode);
orderInfo.appendChild(newImg);
