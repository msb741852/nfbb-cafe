$(document).ready(function () {
  let domain = "";
  domain = location.href.slice(0, location.href.indexOf("/", 8));
  if (location.href.includes("https")) {
    //https를 포함하고 있는 경우
    domain += "/nfbb-cafe";
  }
  // ================= 쿠키 관련 시작 ==================
  // // cookie 확인
  const cookies = document.cookie.split(";");
  let login_chk = false;
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("login")) {
      // login을 포함하고 있는 쿠키에서 "="를 기준으로 배열로 나누고, 1번째 자리에 있는 값을 가져와서 "true"랑 비교해서 같지 않다면 false를 리턴해줌.
      login_chk = cookies[i].split("=")[1] === "true";
    }
  }

  let header_menu_item = "";
  if (!login_chk) {
    // 'login'을 포함한 쿠키(세션)가 없다면 기본 헤더 메뉴 header_menu_item에 넣어주기
    header_menu_item = `
                            <li class="navbar_item">
                              <a href="${domain}/pages/menu_introduce.html">menu</a>
                              <div class="detail_menu">
                                <ul class="detail_menu_list">
                                  <li class="detail_menu_item">
                                    <a href="${domain}/pages/menu_introduce.html">메뉴 소개</a>
                                  </li>
                                  <li class="detail_menu_item">
                                    <a href="${domain}/pages/coffeebeans.html">원두 소개</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="navbar_item"><a href="#">store</a></li>
                            <li class="navbar_item"><a href="${domain}/pages/about.html">about</a></li>
                            <li class="navbar_item">
                              <a href="${domain}/pages/login.html">login</a>
                            </li>
                            <li class="navbar_item">
                              <a href="https://www.instagram.com/nfbb_coffee_roasters/"
                                ><i class="fa-brands fa-instagram" style="color: #000000"></i
                              ></a>
                            </li>
    `;
  } else if (login_chk) {
    // 'login'을 포함한 쿠키(세션)가 있다면 로그인 헤더 메뉴 header_menu_item에 넣어주기
    header_menu_item = `
                            <li class="navbar_item">
                              <a href="${domain}/pages/menu_introduce.html">menu</a>
                              <div class="detail_menu">
                                <ul class="detail_menu_list">
                                  <li class="detail_menu_item">
                                    <a href="${domain}/pages/menu_introduce.html">메뉴 소개</a>
                                  </li>
                                  <li class="detail_menu_item">
                                    <a href="${domain}/pages/coffeebeans.html">원두 소개</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="navbar_item"><a href="#">order</a></li>
                            <li class="navbar_item"><a href="#">store</a></li>
                            <li class="navbar_item"><a href="${domain}/pages/about.html">about</a></li>
                            <li class="navbar_item" id="user_li">
                              <a href="#">
                              <i class="fa-solid fa-user" style="color: #000000;"></i>
                              <div class="detail_menu">
                                <ul class="detail_menu_list">
                                  <li class="detail_menu_item">
                                    <a href="${domain}/pages/edit_profile.html">내 정보 변경</a>
                                  </li>
                                  <li class="detail_menu_item">
                                    <a href="#">주문 목록</a>
                                  </li>
                                  <li class="detail_menu_item">
                                    <a href="#">포인트 조회</a>
                                  </li>
                                  <li class="detail_menu_item" id="btn_logout">
                                    <a href="${domain}/index.html">로그아웃</a>
                                  </li>
                                </ul>
                              </div></a>
                            </li>
                            <li class="navbar_item">
                              <a href="https://www.instagram.com/nfbb_coffee_roasters/""
                                ><i class="fa-brands fa-instagram" style="color: #000000"></i
                              ></a>
                            </li>
    `;
  }
  // header_menu_item에 저장한 메뉴들을 navbar_list에 배치 해주기
  $(".navbar_list").append(header_menu_item);

  $("#btn_logout").on("click", () => {
    document.cookie = "login=false;path=/";
  });

  $(".btn_close").click(() => {
    $(".pan").addClass("pan_closed");
  });

  // ================= 쿠키 관련 끝 ==================

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
