$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active"); /* 선택한 부분만 불 들어오기*/

  let result = $(this).attr("data-alt");
  $(".tabs div").removeClass("active"); /* 누르면 tab1,2,3.선택이 되게끔 명령 */
  $("#" + result).addClass("active"); /*데이터 값을 active 로 줌 */
});
