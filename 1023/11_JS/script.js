const today = new DataTransfer();
const hrs = today.getHours();
const container = document.querySelector("#container");

let newImg = document.createElement("img");
newImg.src = (hrs < 12) ? "/img/2/morning.jpg" : 

