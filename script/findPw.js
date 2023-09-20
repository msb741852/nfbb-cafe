$(document).ready(() => {
  $("input[type='submit']").click(() => {
    let curr_id = "";
    let curr_email = "";
    // input들이 비어있지 않다면
    if ($("#uId").val().length != 0 && $("#uEmail").val().length != 0) {
      curr_id = $("#uId").val();
      curr_email = $("#uEmail").val();

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
        if (user_info[i].id == curr_id && user_info[i].email == curr_email) {
          result_el = `
                        <div class="modal_box">
                          <div class="icon_box">
                            <i class="fa-solid fa-circle-check" style="color: #4ab54c"></i>
                          </div>
                          <div class="modal_contents_container">
                            <span class="result_text">회원님의 이메일로 임시 비밀번호를 보내드렸습니다.</span>
                            <div class="btn_close">확인</div>
                          </div>
                        </div>
                      `;
          break;
        }
      }

      if (
        curr_email.includes("@") &&
        (curr_email.split(".")[1] == "com" ||
          curr_email.split(".")[1] == "co" ||
          curr_email.split(".")[1] == "net")
      ) {
        $(".modal_container").eq(0).append(result_el);
        $(".modal_container").eq(0).css({
          opacity: 1,
          pointerEvents: "all",
        });
      }
    }
  });

  $(document).on("click", ".btn_close", () => {
    $(".modal_box").remove();
    $(".modal_container").css({
      opacity: 0,
      pointerEvents: "none",
    });
  });
});
