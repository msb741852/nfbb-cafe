$(document).ready(() => {
  //  도메인 확인
  let domain = "";
  domain = location.href.slice(0, location.href.indexOf("/", 8));
  if (location.href.includes("https")) {
    //https를 포함하고 있는 경우
    domain += "/nfbb-cafe";
  }

  // ================= 쿠키 관련 시작 ==================
  // cookie 확인

  const cookies = document.cookie;
  const popup_el = `
                    <div class="pan">
                      <div class="slide_container">
                        <div class="swiper popup_swiper">
                          <div class="swiper-wrapper popup-swiper-wrapper">
                            <div class="swiper-slide">
                            <img src='${domain}/img/popup_img01.jpeg' alt='popup_img' />
                            </div>
                            <div class="swiper-slide">
                            <img src='${domain}/img/popup_img02.jpeg' alt='popup_img' />
                            </div>
                            <div class="swiper-slide">
                            <img src='${domain}/img/popup_img03.jpeg' alt='popup_img' />
                            </div>
                            <div class="swiper-slide">
                            <img src='${domain}/img/popup_img04.jpeg' alt='popup_img' />
                            </div>
                          </div>
                          <div class="swiper-button-next swiper-btn"></div>
                          <div class="swiper-button-prev swiper-btn"></div>
                          <div class="swiper-pagination"></div>
                        </div>
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
  let popup_swiper = new Swiper(".popup_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".popup-swiper-wrapper").on("mouseenter", () => {
    popup_swiper.autoplay.stop();
  });
  $(".popup-swiper-wrapper").on("mouseleave", () => {
    popup_swiper.autoplay.start();
  });

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
  $(".swiper-btn, .popup_btn, .swiper-scrollbar, .swiper-pagination").mousedown(
    function (event) {
      pan_click_chk = true;
      event.stopPropagation();
    }
  );

  // btn_container클릭 했을 때
  $(".btn_container").mousedown(function (event) {
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

  $(window).mousemove(function (event) {
    if (click_chk) {
      curr_pos_x = event.clientX;
      curr_pos_y = event.clientY;

      $(".pan").css({
        top: curr_pos_y - box_y,
        left: curr_pos_x - box_x,
      });
    }
  });
});
