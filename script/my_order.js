$(document).ready(() => {
  //  현재 로그인된 계정 정보
  let logined_user_id = "admin";

  // 현재 로그인 한 아이디와 주문목록에 일치한 아이디가 있는 지 확인
  let curr_user_order_list_arr = ORDER_LIST.filter(
    (order_item) => order_item.order_user == logined_user_id
  );

  let getPrice = (menuName) => {
    return menu_introduce.filter((menu) => menu.menuName == menuName)[0].price;
  };
  let order_list_item_el;
  for (let i = 0; i < curr_user_order_list_arr.length; i++) {
    order_list_item_el = `
        <div class="my_order_list_contents">
          <div class="order_contents_item order_date_text">
            ${curr_user_order_list_arr[i].order_date}
          </div>
          <div class="order_contents_item order_list">
            ${curr_user_order_list_arr[i].menu_name}(${
      curr_user_order_list_arr[i].pcs
    })
          </div>
          <div class="order_contents_item order_price">${(
            getPrice(curr_user_order_list_arr[i].menu_name) *
            curr_user_order_list_arr[i].pcs
          ).toLocaleString("ko")}</div>
        </div>
        `;
    $(".my_order_list_contents_outer").append(order_list_item_el);
  }
});
