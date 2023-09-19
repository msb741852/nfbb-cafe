$(document).ready(function () {
  $(".btn_top").click(() => {
    console.log($("html"));
    $("html").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  let curr_detail_menu_height;
  let curr_detail_idx;
  $(".navbar_item").hover(
    function () {
      $(".detail_menu").removeClass("detail_menu_active");
      // 현재 마우스 엔터된 요소의 자식 중 클래스가 detail_memnu인 요소가 있다면 높이값 저장 아니면 0
      curr_detail_menu_height =
        $(this).children(".detail_menu").length == 0
          ? 0
          : $(this).children(".detail_menu").innerHeight();
      if (curr_detail_menu_height != 0) {
        $(".detail_menu_board").css({
          height: curr_detail_menu_height,
        });
      }
      $(this).children(".detail_menu").addClass("detail_menu_active");
      curr_detail_idx = $(this).index();
    },
    function () {
      $(".detail_menu_board").css({
        height: 0,
      });
      $(".detail_menu").removeClass("detail_menu_active");
    }
  );
  $(".detail_menu_board").hover(
    function () {
      $(".navbar_item").eq(curr_detail_idx).trigger("mouseenter");
    },
    function () {
      $(".detail_menu_board").css({
        height: 0,
      });
      $(".detail_menu").removeClass("detail_menu_active");
    }
  );
});
