$(document).ready(() => {
  for (let i = 0; i < 20; i++) {
    let store_item = `<div class="center_circle">
  <div class="item_box">
    <div class="item_contents">item ${i + 1}</div>
  </div>
</div>`;

    $(".circle").append(store_item);

    $(`.center_circle:nth-child(${i + 1})`).css({
      transform: `translate(-50%, -50%) rotate(${i * 18}deg)`,
    });
  }

  $(".item_box").on("click", function () {
    let curr_idx = $(this).parent().index();

    $(".center_circle").css({
      zIndex: 0,
    });
    $(".item_box").css({
      top: 0,
      backgroundColor: "#ececec",
      boxShadow: "none",
    });

    $(this).css({
      top: "-100px",
      backgroundColor: "#ddd",
      boxShadow: "1px 1px 10px #ddd",
    });
    $(this).parent().css({
      zIndex: 10,
    });

    let floating_item = `
    <img src='../img/store_${
      (curr_idx % 10) + 1 < 10
        ? "0" + ((curr_idx % 10) + 1)
        : (curr_idx % 10) + 1
    }.JPG' />
    `;
    if ($(".floating_right_box").hasClass("floating_active")) {
      $(".floating_right_box").removeClass("floating_active");
      setTimeout(() => {
        $(".img_box img").remove();

        $(".img_box").append(floating_item);

        $(".floating_right_box").addClass("floating_active");
      }, 300);
    } else {
      $(".img_box").append(floating_item);
      $(".floating_right_box").addClass("floating_active");
    }
  });

  let deg = 0;
  let rotate_interval;

  let auto_rotate = () => {
    rotate_interval = setInterval(() => {
      $(".circle").css({
        transform: `translate(-70%, 70%) rotate(${deg++ * 18}deg)`,
      });
    }, 1000);
  };
  auto_rotate();
  $(".circle").hover(
    () => {
      clearInterval(rotate_interval);
    },
    () => {
      auto_rotate();
    }
  );
});
