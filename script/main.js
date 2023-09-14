$(document).ready(() => {
  let header_height = $(".header").innerHeight();
  let video_section_top_gap = $(".video_section").offset().top;

  $(document).scroll(() => {
    let scroll_top = $(window).scrollTop();
    let video_height = $(".video_section").height();

    // scroll_top이 header보다 내려가면 header fixed
    if (header_height <= scroll_top) {
      $(".header").addClass("header_active");
      $(".container").css({
        paddingTop: header_height + "px",
      });
    } else {
      $(".header").removeClass("header_active");
      $(".container").css({
        paddingTop: 0,
      });
    }

    // fixed 된 헤더의 밑부분이 video_section의 중간지점에 닿으면 slogun 보여주기
    let curr_header_bottom = scroll_top + header_height;
    if (video_section_top_gap + video_height / 2 <= curr_header_bottom) {
      $(".slogun_top_txt, .slogun_bottom_txt").addClass("slogun_active");
    }
  });

  //==================== menu slide ================================

  let menu_item_width = $(".menu_item").width();
  for (let i = 0; i < $(".menu_item").length; i++) {
    $(".menu_item")
      .eq(i)
      .css({
        left: menu_item_width * i,
      });
  }
  let curr_slide_no = 0;
  let menu_item_cnt = $(".menu_item").length;
  let slide_timer = 1000;
  let slide_interval;
  $(".btn_next").click(() => {
    prevent_btn(slide_timer);
    slide_all(`-=${menu_item_width}`, slide_timer);
    slide_init(
      curr_slide_no % menu_item_cnt,
      menu_item_width * ($(".menu_item").length - 1)
    );
    curr_slide_no += 1;
  });
  $(".btn_prev").click(() => {
    prevent_btn(slide_timer);
    // 현재 슬라이드 번호 -1 left: -width
    slide_init((curr_slide_no - 1) % menu_item_cnt, `-${menu_item_width}`);
    // item 전체 left +넓이만큼
    slide_all(`+=${menu_item_width}`, slide_timer);
    curr_slide_no -= 1;
  });

  auto_slide();
  $(".menu_list").hover(
    () => {
      clearInterval(slide_interval);
    },
    () => {
      auto_slide();
    }
  );

  () => {};
  function slide_all(left_value, timer) {
    $(".menu_item").animate(
      {
        left: left_value,
      },
      timer,
      "linear"
    );
  }
  function slide_init(eq_value, left_value) {
    $(".menu_item").eq(eq_value).animate(
      {
        left: left_value,
      },
      0,
      "linear"
    );
  }
  function prevent_btn(timer) {
    $(".slide_btn").css({
      pointerEvents: "none",
    });
    setTimeout(() => {
      $(".slide_btn").css({
        pointerEvents: "auto",
      });
    }, timer);
  }
  function auto_slide() {
    slide_interval = setInterval(() => {
      $(".btn_next").trigger("click");
    }, slide_timer + 1000);
  }
});
