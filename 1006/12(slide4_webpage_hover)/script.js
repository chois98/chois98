// 메뉴 버튼 클릭 한번 하면 흰색으로 변경
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".modal-gnb").fadeToggle();
});
