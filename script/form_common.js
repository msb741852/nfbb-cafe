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

  $("input[type='submit']").click((event) => {
    // 빈 칸 확인
    let input_el = $(".input_container input");
    for (let i = 0; i < input_el.length; i++) {
      if (input_el.eq(i).val().trim().length == 0) {
        $(".input_container").eq(i).addClass("input_empty");
      } else if (input_el.eq(i).val().trim().length != 0) {
        $(".input_container").eq(i).removeClass("input_empty");
      }
    }
  });
});
