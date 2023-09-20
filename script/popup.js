$(document).ready(() => {
  // ================= 쿠키 관련 시작 ==================
  // cookie 확인

  const cookies = document.cookie;
  const popup_el = `
                    <div class="pan">
                    <div class="slide_container">
                      <ul class="slide_list"></ul>
                      <div class="popup_slide_btn btn_popup_L">&lt</div>
                      <div class="popup_slide_btn btn_popup_R">&gt</div>
                    </div>
                    <div class="btn_container">
                      <div class="popup_btn btn_oneday_close">오늘 하루 닫기</div>
                      <div class="popup_btn btn_close">닫기</div>
                    </div>
                  </div>
                  `;

  if (!cookies.includes("popup")) {
    $("body").append(popup_el);
  }
  let hour_24 = 1 * 60 * 60 * 24;
  $(".btn_oneday_close").click(() => {
    document.cookie = `popup=true;max-age=${hour_24}`;
    $(".pan").remove();
  });

  $(".btn_close").click(() => {
    $(".pan").addClass("pan_closed");
  });

  // ================= 쿠키 관련 끝 ==================

  let curr_pos_x = 0;
  let curr_pos_y = 0;
  let box_x = 0;
  let box_y = 0;
  // click_chk 마우스가 눌려져있는지 체크
  let click_chk = false;
  let pan_click_chk = true;

  // popup_slide_btn, popup_btn 눌렀을 때
  $(".popup_slide_btn, .popup_btn").mousedown(function (event) {
    pan_click_chk = true;
    event.stopPropagation();
  });

  // btn_container클릭 했을 때
  $(".btn_container").mousedown(function () {
    if (pan_click_chk) {
      box_x = event.offsetX;
      box_y = 451.6 + event.offsetY;
      pan_click_chk = false;
    }
  });

  $(".slide_container").mousedown(function () {
    pan_click_chk = true;
  });

  $(".pan").mousedown(function () {
    click_chk = true;
    if (pan_click_chk) {
      box_x = event.offsetX;
      box_y = event.offsetY;
    }

    pan_click_chk = true;
  });
  $(".pan").mouseup(function () {
    click_chk = false;
  });

  $(window).mousemove(function () {
    if (click_chk) {
      curr_pos_x = event.clientX;
      curr_pos_y = event.clientY;

      $(".pan").css({
        top: curr_pos_y - box_y,
        left: curr_pos_x - box_x,
      });
    }
  });

  //==================== 팝업 슬라이드 ====================
  let slide_curr_idx = 0;
  let slide_cnt = $(".slide_item").length;
  let btn_popup_L = $(".btn_popup_L");
  let btn_popup_R = $(".btn_popup_R");
  let popup_interval;
  function prevent_popup_btn() {
    $(".popup_slide_btn").click(() => {
      $(".popup_slide_btn").css({
        pointerEvents: "none",
      });
      setTimeout(() => {
        $(".popup_slide_btn").css({
          pointerEvents: "auto",
        });
      }, 1000);
    });
  }
  prevent_popup_btn();
  // r 버튼 누르면 기존 curr은 -100%, curr+1은 0으로
  btn_popup_R.click(() => {
    $(".slide_item")
      .eq(slide_curr_idx % slide_cnt)
      .css({
        left: "-100%",
        transition: "all 1s",
      });
    $(".slide_item")
      .eq((slide_curr_idx + 1) % slide_cnt)
      .css({
        left: "0",
        transition: "all 1s",
      });

    // 슬라이드 1초가 지난 뒤 curr_idx - 1번째 아이템을 옮긴다.
    setTimeout(() => {
      $(".slide_item")
        .eq((slide_curr_idx - 1) % slide_cnt)
        .css({
          left: "100%",
          transition: "all 0s",
        });
    }, 1000);

    slide_curr_idx += 1;
  });

  btn_popup_L.click(() => {
    $(".slide_item")
      // 현재 나와있는 아이템 left 100%로 밀어내기
      .eq(slide_curr_idx % slide_cnt)
      .css({
        left: "100%",
        transition: "all 1s",
      });

    // 현재 -1 번째 아이템을 left: -100%로 보낸뒤
    $(".slide_item")
      .eq((slide_curr_idx - 1) % slide_cnt)
      .css({
        left: "-100%",
        transition: "all 0s",
      });
    setTimeout(() => {
      $(".slide_item")
        .eq(slide_curr_idx % slide_cnt)
        .css({
          left: 0,
          transition: "all 1s",
        });
    }, 0);
    slide_curr_idx -= 1;
  });

  function popup_auto_slide() {
    clearInterval(popup_interval);
    popup_interval = setInterval(() => {
      btn_popup_R.trigger("click");
    }, 3000);
  }
  popup_auto_slide();
  $(".slide_container").hover(
    () => {
      clearInterval(popup_interval);
    },
    () => {
      popup_auto_slide();
    }
  );
});
