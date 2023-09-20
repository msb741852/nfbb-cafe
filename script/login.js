$(document).ready(() => {
  let domain = "";
  domain = location.href.slice(0, location.href.indexOf("/", 8));
  if (location.href.includes("https")) {
    //https를 포함하고 있는 경우
    domain += "/nfbb-cafe";
  }
  // ================= 쿠키 관련 시작 ==================
  // cookie 확인

  console.log(domain);
  function setCookie() {
    if (domain.includes("/nfbb-cafe")) {
      document.cookie = `login=true;path=/nfbb-cafe`;
    } else {
      document.cookie = `login=true;path=/`;
    }
  }

  // ================= 쿠키 관련 끝 ==================

  // ======== 추후에 묶을 수 있는 부분 =======
  $("input[type='submit']").click(function (event) {
    event.preventDefault();
    let curr_id = "";
    let curr_pw = "";
    // input들이 비어있지 않다면
    if ($("#uId").val().length != 0 && $("#uPw").val().length != 0) {
      curr_id = $("#uId").val();
      curr_pw = $("#uPw").val();

      let result_el = `
                        <div class="modal_box">
                          <div class="icon_box">
                            <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
                          </div>
                          <div class="modal_contents_container">
                            <span class="result_text"
                              >존재하지 않는 회원정보입니다.<br />다시 한 번 확인해주세요.</span
                            >
                            <div class="btn_close">확인</div>
                          </div>
                        </div>
                      `;

      // user_info에 있는 데이터들과 비교
      for (let i = 0; i < user_info.length; i++) {
        if (user_info[i].id == curr_id && user_info[i].password == curr_pw) {
          result_el = `
                        <div class="modal_box">
                          <div class="icon_box">
                            <i class="fa-solid fa-circle-check" style="color: #4ab54c"></i>
                          </div>
                          <div class="modal_contents_container">
                            <span class="result_text">즐거운 하루 되세요! 😊</span>
                          </div>
                        </div>
                      `;
          $(".modal_container").eq(0).append(result_el);
          $(".modal_container").eq(0).css({
            opacity: 1,
            pointerEvents: "all",
          });
          setTimeout(() => {
            setCookie();
            location.replace(`${domain}/index.html`);
          }, 2000);
          break;
        }
      }
      $(".modal_container").eq(0).append(result_el);
      $(".modal_container").eq(0).css({
        opacity: 1,
        pointerEvents: "all",
      });
    }
  });
});
