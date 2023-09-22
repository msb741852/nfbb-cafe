$(document).ready(() => {
  let curr_chk_idx = 0;

  let result_el = `
  <div class="modal_box">
    <div class="icon_box">
      <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
    </div>
    <div class="modal_contents_container">
      <span class="result_text">메뉴 선택 후 입력해주세요!</span>
      <div class="btn_close">확인</div>
    </div>
  </div>
`;
  let show_modal = () => {
    $(".modal_container").eq(0).append(result_el);
    $(".modal_container").eq(0).css({
      opacity: 1,
      pointerEvents: "all",
    });
  };

  $(".can_point_text").text(
    "사용 가능 포인트 : " + user_info[0].point.toLocaleString("ko")
  );
  function close_modal() {
    $(".modal_box").remove();
    $(".modal_container").css({
      opacity: 0,
      pointerEvents: "none",
    });
  }
  $(document).on("click", ".btn_close", () => {
    close_modal();
  });
  $("#point_input").focus(() => {
    // total_price가 0 일 때 포인트 입력하면 판 띄우기
    if ($(".total_price").eq(0).text().split(":")[1].trim() == 0) {
      $(".modal_container").eq(0).append(result_el);
      $(".modal_container").eq(0).css({
        opacity: 1,
        pointerEvents: "all",
      });
    }
  });
  $("#point_input").blur(function () {
    if (
      +$("#point_input").val() <= user_info[0].point &&
      +$("#point_input").val() <=
        $(".total_price").text().split(":")[1].replace(",", "").trim()
    ) {
      setFinalPrice();
    } else if (
      +$("#point_input").val() > user_info[0].point &&
      +$("#point_input").val() <=
        $(".total_price").text().split(":")[1].replace(",", "").trim()
    ) {
      result_el = `
              <div class="modal_box">
                <div class="icon_box">
                  <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
                </div>
                <div class="modal_contents_container">
                  <span class="result_text">보유하신 포인트보다 많이 입력하셨습니다!</span>
                  <div class="btn_close">확인</div>
                </div>
              </div>
        `;
      show_modal();
    } else if (
      +$("#point_input").val() > user_info[0].point &&
      +$("#point_input").val() >
        $(".total_price").text().split(":")[1].replace(",", "").trim()
    ) {
      result_el = `
      <div class="modal_box">
        <div class="icon_box">
          <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
        </div>
        <div class="modal_contents_container">
          <span class="result_text">포인트 및 총금액을 확인해주세요!</span>
          <div class="btn_close">확인</div>
        </div>
      </div>
`;
      show_modal();
      $("#point_input").val(0);
    } else if (
      +$("#point_input").val() >= user_info[0].point &&
      +$("#point_input").val() >=
        $(".total_price").text().split(":")[1].replace(",", "").trim()
    ) {
      result_el = `
              <div class="modal_box">
                <div class="icon_box">
                  <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
                </div>
                <div class="modal_contents_container">
                  <span class="result_text">최악😱</span>
                  <div class="btn_close">확인</div>
                </div>
              </div>
        `;
      show_modal();
      $("#point_input").val(0);
    }
  });

  // tab_btn 클릭 시 tab_btn_active를 삭제하고 클릭한 아이템에게 tab_btn_active 부여
  $(".tab_btn").click(function () {
    $(".tab_btn").removeClass("tab_btn_active");
    $(".tab_btn").eq($(this).index()).addClass("tab_btn_active");
    curr_chk_idx = $(this).index();

    $(".menu_list_container").removeClass("menu_list_container_active");
    $(".menu_list_container")
      .eq(curr_chk_idx)
      .addClass("menu_list_container_active");
  });

  for (let i = 0; i < menu_genre.length; i++) {
    let curr_menu_genre = menu_genre[i];
    let curr_menu_list = menu_genre[i].replace("-", "_");
    // menu_list_container 요소 추가
    $(".menu_introduce_board").append(
      `<div class='menu_list_container'></div>`
    );

    $(`.menu_list_container`).eq(i).append(`<div class='menu_ul_outer'></div>`);
    // menu_list_container 안에 ul 생성
    $(".menu_ul_outer")
      .eq(i)
      .append(`<ul class='menu_list ${curr_menu_list}_list'></ul>`);
    // ul 안에 li 추가
    for (let j = 0; j < menu_introduce.length; j++) {
      if (curr_menu_genre == menu_introduce[j].menugenre) {
        let menu_genre_item = `
                  <li class="menu_list_item" id='menu${
                    menu_introduce[j].menuIdx
                  }'>
                      <div class="img_box">
                        <img src='../img/${
                          menu_introduce[j].img_src
                        }' alt='menu_img'/>
                      </div>
                      <div class='menu_info_container'>
                        <div class="menu_genre menu_name">${
                          menu_introduce[j].menuName
                        }</div>
                        <div class="menu_price">${menu_introduce[
                          j
                        ].price.toLocaleString("ko")}</div>
                      </div>
                  </li>
              `;
        $(`.${curr_menu_list}_list`).append(menu_genre_item);
      }
    }

    $(".tab_btn").eq(0).trigger("click");
  }

  $(document).on("click", ".menu_list_item", function () {
    let curr_item_id = $(this).attr("id");
    let curr_menu_name = $(this)
      .children(".menu_info_container")
      .children(".menu_name")
      .text();
    let curr_menu_price = $(this)
      .children(".menu_info_container")
      .children(".menu_price")
      .text();

    let order_item_el = `
                          <li class="order_item" id="order_item_${curr_item_id}"}>
                            <div class="item_menu_name">${curr_menu_name}</div>
                            <div class="item_menu_price">${curr_menu_price}</div>
                            <div class="item_menu_pcs_container">
                              <div class="item_btn item_btn_minus">-</div>
                              <span class="item_menu_pcs">1</span>
                              <div class="item_btn item_btn_plus">+</div>
                            </div>
                          </li>
    `;

    let curr_order_item = $(`.order_item#order_item_${curr_item_id}`);
    // 현재 오더 아이템 중 같은 id의 메뉴가 있는지 확인
    if (curr_order_item.length > 0) {
      let curr_order_item_pcs = curr_order_item
        .children(".item_menu_pcs_container")
        .children(".item_menu_pcs")
        .text();
      curr_order_item_pcs = curr_order_item
        .children(".item_menu_pcs_container")
        .children(".item_menu_pcs")
        .text(+curr_order_item_pcs + 1);
    } else {
      $(".order_list").eq(0).append(order_item_el);
    }

    let total_price = 0;
    let menu_price = 0;
    let menu_pcs = 0;
    for (let i = 0; i < $(".order_item").length; i++) {
      menu_price = 0;
      menu_pcs = 0;
      menu_price = +$(".order_item")
        .eq(i)
        .children(".item_menu_price")
        .text()
        .replace(",", "");
      menu_pcs = +$(".order_item")
        .eq(i)
        .children(".item_menu_pcs_container")
        .children(".item_menu_pcs")
        .text();
      total_price += menu_price * menu_pcs;
    }

    setTotalPrice();
    setFinalPrice();
  });

  $(document).on("click", ".item_btn_minus", function () {
    $(this)
      .next()
      .text(+$(this).next().text() <= 0 ? 0 : +$(this).next().text() - 1);

    setTotalPrice();
    setFinalPrice();
  });
  $(document).on("click", ".item_btn_plus", function () {
    let result = Number($(this).eq(0).prev().text()) + Number(1);
    $(this).parent().children(".item_menu_pcs").eq(0).text(result);
    setTotalPrice();
    setFinalPrice();
  });

  function setTotalPrice() {
    let total_price = 0;
    for (let i = 0; i < $(".order_item").length; i++) {
      total_price +=
        +$(".order_item")
          .eq(i)
          .children(".item_menu_price")
          .text()
          .replace(",", "") *
        +$(".order_item")
          .eq(i)
          .children(".item_menu_pcs_container")
          .children(".item_menu_pcs")
          .text();
    }
    $(".total_price").text("총액 : " + total_price.toLocaleString("ko"));
  }

  function setFinalPrice() {
    let final_price = 0;

    for (let i = 0; i < $(".order_item").length; i++) {
      final_price +=
        +$(".order_item")
          .eq(i)
          .children(".item_menu_price")
          .text()
          .replace(",", "") *
        +$(".order_item")
          .eq(i)
          .children(".item_menu_pcs_container")
          .children(".item_menu_pcs")
          .text();
    }
    final_price -= +$("#point_input").val();
    $(".final_price").text("지불할 금액 : " + final_price.toLocaleString("ko"));
  }

  function order() {
    result_el = `
        <div class="modal_box">
          <div class="modal_contents_container">
            <span class="result_text">결제하시겠습니까?</span>
            <div class="btn_container">
              <div class="btn_yes">예</div>
              <div class="btn_close">아니오</div>
            </div>
          </div>
        </div>
    `;
  }

  $(".btn_order").click(() => {
    let total_price = +$(".total_price")
      .text()
      .split(":")[1]
      .trim()
      .replace(",", "");

    // total이 0 이 아니면 order modal창 보여주기
    if (total_price > 0) {
      order();
      show_modal();

      $(".btn_yes").on("click", () => {
        $(".result_text").text("주문이 완료되었습니다! 😊");
        $(".btn_container").remove();
        setTimeout(() => {
          close_modal();
          location.replace("./order.html");
        }, 1000);
      });
    }
  });
});
