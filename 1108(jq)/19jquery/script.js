$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  $("#sec_1 img").attr({
    src: srcVal.replace("1.PNG", "2.PNG"),
    width: 200,
  });
});
