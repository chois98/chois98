$(".navi li").mouseenter(function () {
  let changeImage = $(this).attr("data-image");
  $(".photo").css({ background: `url(${changeImage})` });
});
$(".navi li").mouseleave(function () {
  $(".phto").css({ background: "" });
});
