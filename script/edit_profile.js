$(document).ready(() => {
  $("#uPhone").val(user_info[0].phone);
  $("#uEmail").val(user_info[0].email);

  for (let i = 0; i < $(".input_container").length; i++) {
    if ($(".input_container").eq(i).children("input").val().length != 0) {
      $(".input_container")
        .eq(i)
        .children("input")
        .next()
        .addClass("focus_input");
    }
  }

  $(".input_container input").focus(function () {
    $(this).next().addClass("focus_input");
  });

  $(".input_container input").blur(function () {
    if ($(this).val().length === 0) {
      $(this).next().removeClass("focus_input");
      $(this).parent().addClass("input_empty");
    } else if ($(this).val().length !== 0) {
      $(this).parent().removeClass("input_empty");
    }
  });
  $(".input_container input").keyup(function (event) {
    if (event.keyCode === 32) {
      $(this).val($(this).val().trim());
    }
  });
  // ===================== 비밀번호 관련 시작 =======================
  $("#uPw").blur(function () {
    if ($("#uPwChk").val().length != 0) {
      $("#uPwChk").trigger("blur");
    }
  });

  $("#uPwChk").focus(function () {
    if ($("#uPw").val().length === 0) {
      $("#uPw").parent().addClass("user_pw_empty");
      $("#uPw").focus();
    } else {
      if ($("#uPw").parent().hasClass("user_pw_empty")) {
        $("#uPw").parent().removeClass("user_pw_empty");
      }
    }
  });

  $("#uPwChk").blur(function () {
    $("#uPwChk").parent().removeClass();
    $("#uPwChk").parent().addClass("input_container");
    if ($("#uPw").val().length != 0) {
      // uPwChk length가 0일 경우 부모에게 user_pw_empty 클래스 추가후 uPwChk에 포커스
      if ($("#uPwChk").val().length == 0) {
        $("#uPwChk").parent().addClass("user_pw_empty");
        $("#uPwChk").focus();
      } else if (
        $("#uPwChk").val().length != 0 &&
        $("#uPw").val() != $("#uPwChk").val()
      ) {
        // uPwChk 비어있지는 않지만 uPw랑 비교했을 때 다르다면 user_pw_empty 클래스는 삭제하고 user_pwChk_false 추가(위 조건문 포함)
        $("#uPwChk").parent().removeClass("user_pw_empty");
        $("#uPwChk").parent().addClass("user_pwChk_false");
      } else if (
        $("#uPwChk").val().length != 0 &&
        $("#uPw").val() == $("#uPwChk").val()
      ) {
        // 둘이 같을 경우 user_pwChk_false 삭제 후 user_pwChk_true 클래스 추가
        $("#uPwChk").parent().removeClass("user_pwChk_false");
        $("#uPwChk").parent().addClass("user_pwChk_true");
      }
    }
  });

  $("#btn_edit_profile").click((event) => {
    // 빈 칸 확인
    let input_el = $(".input_container input");
    for (let i = 0; i < input_el.length; i++) {
      if (input_el.eq(i).val().trim().length == 0) {
        $(".input_container").eq(i).addClass("input_empty");
      } else if (input_el.eq(i).val().trim().length != 0) {
        $(".input_container").eq(i).removeClass("input_empty");
      }
    }
    if (input_el.parent().hasClass("input_empty")) {
      event.preventDefault();
    }

    let curr_pw = $("#uPw").val();
    let curr_pwChk = $("#uPwChk").val();
    let result_el = "";
    // input들이 비어있지 않다면
    if (curr_pw.length >= 8 && curr_pwChk.length >= 8) {
      if (curr_pw == curr_pwChk) {
        if (curr_pw == user_info[0].password) {
          result_el = `
                        <div class="modal_box">
                          <div class="icon_box">
                            <i class="fa-solid fa-circle-xmark" style="color: #df2626"></i>
                          </div>
                          <div class="modal_contents_container">
                            <span class="result_text"
                              >이전에 사용하시던 비밀번호입니다.<br> 다른 비밀번호를 사용해주세요!</span
                            >
                            <div class="btn_close">확인</div>
                          </div>
                        </div>
                      `;
        } else if (curr_pw != user_info[0].password) {
          result_el = `
                        <div class="modal_box">
                          <div class="icon_box">
                            <i class="fa-solid fa-circle-check" style="color: #4ab54c"></i>
                          </div>
                          <div class="modal_contents_container">
                            <span class="result_text">회원님의 비밀번호를 수정하였습니다.</span>
                            <div class="btn_close">확인</div>
                          </div>
                        </div>
                      `;
        }
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
