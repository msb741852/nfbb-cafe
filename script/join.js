$(document).ready(() => {
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
  // ===================== 비밀번호 관련 끝 =======================

  // ==================== 전화번호 관련 시작 ======================
  // 48 ~ 57 , 96 ~ 105

  // 문자 못넣게 만듬 => 하이픈 넣는 것만 넣으면 됨
  $("#uPhone").keydown(function (event) {
    let curr_text = $(this).val();
    if (
      (!(event.keyCode == 8) && $(this).val().length == 3) ||
      (!(event.keyCode == 8) && $(this).val().length == 8)
    ) {
      $(this).val(curr_text + "-");
    }

    if (
      !(
        (48 <= event.keyCode && event.keyCode <= 57) ||
        (96 <= event.keyCode && event.keyCode <= 105) ||
        event.keyCode == 8
      )
    ) {
      event.preventDefault();
    }
  });

  $("#uPhone").keyup(function (event) {
    let curr_text_keyup = $(this).val();

    if (
      (event.keyCode == 8 && $(this).val().length == 4) ||
      (event.keyCode == 8 && $(this).val().length == 9)
    ) {
      $(this).val(curr_text_keyup.slice(0, -1));
    }
  });
  // ==================== 전화번호 관련 끝 ======================

  $("#btn_join").click((event) => {
    // 빈 칸 확인
    let input_el = $(".input_container input");
    for (let i = 0; i < input_el.length; i++) {
      if (input_el.eq(i).val().trim().length == 0) {
        $(".input_container").eq(i).addClass("input_empty");
      } else if (input_el.eq(i).val().trim().length != 0) {
        $(".input_container").eq(i).removeClass("input_empty");
      }
    }
    let curr_email = $("#eMail").val();
    if (
      !(
        curr_email.includes("@") &&
        (curr_email.split(".")[1] == "com" ||
          curr_email.split(".")[1] == "co" ||
          curr_email.split(".")[1] == "net")
      )
    ) {
      event.preventDefault();
    }

    if (input_el.parent().hasClass("input_empty")) {
      event.preventDefault();
    }
  });
});
