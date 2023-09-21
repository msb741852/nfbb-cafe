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
  let video_height = $(".video_section").height();
  let video_section_top_gap = $(".video_section").offset().top;

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

  $(".prevent_event > a").click(function (event) {
    event.preventDefault();
    if (getCookie()) {
      location.href = $(this).attr("href");
    } else {
      location.href = "../pages/login.html";
    }
  });
  function getCookie() {
    let cookies_arr = document.cookie.split(";");
    for (let i = 0; i < cookies_arr.length; i++) {
      if (cookies_arr[i].includes("login")) {
        if (cookies_arr[i].trim().split("=")[1] == "true") {
          return true;
        } else {
          return false;
        }
      }
    }
  }
});
