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
                 <div class="swiper-slide menu-swiper-slide menu_item" id="menu${
                   i + 1
                 }">
                  <img src="./img/${
                    menu_introduce[i].img_src
                  }" alt="menu_img" />
                  <div class="menu_info">
                    <div class="menu_title">${menu_introduce[i].menuName}</div>
                    <div class="menu_price">${menu_introduce[i].price}</div>
                  </div>
                 </div>`;

    $(".menu_swiper_wrapper").append(menu_introduce_item);
  }
  let menu_swiper = new Swiper(".menu_swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".menu-swiper-slide").on("mouseenter", () => {
    menu_swiper.autoplay.stop();
  });
  $(".menu-swiper-slide").on("mouseleave", () => {
    menu_swiper.autoplay.start();
  });

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

  let domain = "";
  domain = location.href.slice(0, location.href.indexOf("/", 8));
  if (location.href.includes("https")) {
    //https를 포함하고 있는 경우
    domain += "/nfbb-cafe";
  }

  $(".prevent_event > a").click(function (event) {
    event.preventDefault();
    if (getCookie()) {
      location.href = $(this).attr("href");
    } else {
      location.href = `${domain}/pages/login.html`;
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
