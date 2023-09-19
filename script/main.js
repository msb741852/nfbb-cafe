$(document).ready(() => {
  // ======================= 요소 생성 시작 =========================

  //팝업창 아이템
  for (let i = 0; i < popup_img.length; i++) {
    let popup_item = `<li class="slide_item">
                    <img src="./img/${popup_img[i]}" alt="popup_img" />
                  </li>`;
    $(".slide_list").append(popup_item);
  }

  // 메뉴 소개 아이템
  for (let i = 0; i < 10; i++) {
    let menu_introduce_item = `
                <li class="menu_item" id="menu${i + 1}">
                  <img src="./img/${
                    menu_introduce[i].img_src
                  }" alt="menu_img" />
                  <div class="menu_info">
                    <div class="menu_title">${menu_introduce[i].menuName}</div>
                    <div class="menu_price">${menu_introduce[i].price}</div>
                  </div>
                </li>
                `;
    $(".menu_introduce_list").append(menu_introduce_item);
  }

  // ======================= 요소 생성 끝 =========================

  let header_height = $(".header").innerHeight();
  let video_section_top_gap = $(".video_section").offset().top;
  let video_height = $(".video_section").height();
  let curr_detail_menu_height;
  let curr_detail_idx;
  $(".navbar_item").hover(
    function () {
      $(",header");
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

  if ($(window).scrollTop() != 0) {
    // 영상의 반보다 내려왔으면 헤더 픽스 & 글자 나오기
    if (video_section_top_gap + video_height / 2 <= $(window).scrollTop()) {
      $(".header").addClass("header_active");
      $(".container").css({
        paddingTop: header_height + "px",
      });
      $(".slogun_top_txt, .slogun_bottom_txt").addClass("slogun_active");
    } else if (header_height <= $(window).scrollTop()) {
      $(".header").addClass("header_active");
      $(".container").css({
        paddingTop: header_height + "px",
      });
    }
  }

  $(document).scroll(() => {
    let scroll_top = $(window).scrollTop();

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
    let curr_header_bottom = scroll_top + header_height;
    if (video_section_top_gap + video_height / 2 <= curr_header_bottom) {
      $(".slogun_top_txt, .slogun_bottom_txt").addClass("slogun_active");
    }
  });

  //==================== menu_introduce slide ================================

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

  auto_slide();

  $(".btn_next").on("click", () => {
    prevent_btn(slide_timer);
    slide_all("R", `-=${menu_item_width}`);
    slide_init(
      "R",
      curr_slide_no % menu_item_cnt,
      menu_item_width * ($(".menu_item").length - 1)
    );
    curr_slide_no += 1;
  });
  $(".btn_prev").on("click", () => {
    prevent_btn(slide_timer);
    // 현재 슬라이드 번호 -1 left: -width
    slide_init("L", (curr_slide_no - 1) % menu_item_cnt, menu_item_width);
    // item 전체 left +넓이만큼
    slide_all("L", `+=${menu_item_width}`);
    curr_slide_no -= 1;
  });

  $(".menu_introduce_list").on("mouseenter", () => {
    clearInterval(slide_interval);
  });
  $(".menu_introduce_list").on("mouseleave", () => {
    auto_slide();
  });

  function slide_init(direction, eq_value, left_value) {
    if (direction == "R") {
      setTimeout(() => {
        $(".menu_item").eq(eq_value).css({
          left: left_value,
          transition: "all 0s",
        });
      }, 1000);
    } else if (direction == "L") {
      $(".menu_item").eq(eq_value).css({
        left: -left_value,
        transition: "all 0s",
      });
    }
  }
  function slide_all(direction, left_value) {
    if (direction == "R") {
      $(".menu_item").css({
        left: left_value,
        transition: "all 1s",
      });
    } else if (direction == "L") {
      setTimeout(() => {
        $(".menu_item").css({
          left: left_value,
          transition: "all 1s",
        });
      }, 10);
    }
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
    clearInterval(slide_interval);
    slide_interval = setInterval(() => {
      $(".btn_next").trigger("click");
    }, slide_timer + 1000);
  }
});
