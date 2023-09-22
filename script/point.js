$(document).ready(() => {
  //  현재 로그인된 계정 정보
  let logined_user_id = "admin";

  // 현재 로그인 한 아이디와 주문목록에 일치한 아이디가 있는 지 확인
  let curr_user_point_arr = POINT.filter(
    (point_item) => point_item.userId == logined_user_id
  );
  let point_item_el;
  for (let i = 0; i < curr_user_point_arr.length; i++) {
    point_item_el = `
        <div class="point_list_contents">
          <div class="point_contents_item point_date_text">
            ${curr_user_point_arr[i].point_date}
          </div>
          <div class="point_contents_item point_list">
            ${curr_user_point_arr[i].isUse ? "사용" : "적립"}
          </div>
          <div class="point_contents_item point_price">
          ${curr_user_point_arr[i].point.toLocaleString("ko")}
          </div>
        </div>
        `;
    $(".point_list_contents_outer").append(point_item_el);
  }
});
