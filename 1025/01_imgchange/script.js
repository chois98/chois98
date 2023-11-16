window.onload = function () {
  const bgCount = 5;
  let randomNumder1 =
    Math.floor(Math.random() * bgCount) +
    1; /* 1부터 5까지 랜덤적으로 나오게끔 */
  // let randomNumder2 = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(../img/bg-${randomNumder1}.jpg)`;
};
