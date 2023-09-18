$(document).ready(function () {
  $(".btn_top").click(() => {
    console.log($("html"));
    $("html").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
