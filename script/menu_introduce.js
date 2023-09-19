$(document).ready(() => {
  let curr_chk_idx = 0;

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
    if (i == 0) {
      $(".menu_list_container").eq(0).addClass("menu_list_container_acitve");
    }
    let menu_genre_header = `
                          <div class="menu_list_header">
                            <div class="menu_genre">${curr_menu_genre}</div>
                            <div class="menu_price">price</div>
                          </div>`;

    //menu_list_container에 헤더 추가
    $(`.menu_list_container`).eq(i).append(menu_genre_header);

    $(`.menu_list_container`).eq(i).append(`<div class='menu_ul_outer'></div>`);
    // menu_list_container 안에 ul 생성
    $(".menu_ul_outer")
      .eq(i)
      .append(`<ul class='menu_list ${curr_menu_list}_list'></ul>`);
    // ul 안에 li 추가
    for (let j = 0; j < menu_introduce.length; j++) {
      if (curr_menu_genre == menu_introduce[j].menugenre) {
        let menu_genre_item = `
                  <li class="menu_list_item">
                      <div class="menu_genre menu_name">${menu_introduce[j].menuName}</div>
                      <div class="menu_price">${menu_introduce[j].price}</div>
                  </li>
              `;
        $(`.${curr_menu_list}_list`).append(menu_genre_item);
      }
    }
  }
});
