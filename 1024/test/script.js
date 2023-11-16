$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});

$(".gnb").click(function () {
  $(".gnb, .trigger").removeClass("active");
});
