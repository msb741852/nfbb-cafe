$(document).ready(() => {
  let header_height = $(".header").innerHeight();
  let video_section_top_gap = $(".video_section").offset().top;

  $(document).scroll(() => {
    let scroll_top = $(window).scrollTop();
    let video_height = $(".video_section").height();

    // scroll_top이 header보다 내려가면 header fixed
    if (header_height <= scroll_top) {
      console.log(video_section_top_gap);

      $(".header").addClass("header_active");
      $(".container").css({
        paddingTop: header_height + "px",
      });
    } else {
      $(".header").removeClass("header_active");
      $(".container").css({
        paddingTop: 0,
      });
    }

    // fixed 된 헤더의 밑부분이 video_section의 중간지점에 닿으면 slogun 보여주기
    let curr_header_bottom = scroll_top + header_height;
    if (video_section_top_gap + video_height / 2 <= curr_header_bottom) {
      $(".slogun_top_txt, .slogun_bottom_txt").addClass("slogun_active");
    }
  });
});
