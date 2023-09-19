$(document).ready(() => {
  setTimeout(() => {
    let ul_height = $(".coffee_beans_list").height();
    $("#coffee_beans_container").css({
      height: ul_height,
      overflow: "all",
      padding: "100px",
    });
    console.log(ul_height);
  }, 1000);

  for (let i = 0; i < coffee_beans.length; i++) {
    let coffee_beans_item = `
                          <li class="coffee_beans_item">
                            <div class="coffee_beans_img_box">
                              <img src="../img/${
                                coffee_beans[i].img_src
                              }" alt="coffee_beans_img" />
                            </div>
                            <div class="coffee_beans_desc">
                              <div class="coffee_beans_title">${
                                coffee_beans[i].coffeeBeans_name
                              }</div>
                              <div class="cup_note">${
                                coffee_beans[i].cupnote
                              }</div>
                              <div class="sour_level">산미 : ${"🍋".repeat(
                                coffee_beans[i].sour
                              )}</div>
                            </div>
                          </li>`;
    $(".coffee_beans_list").append(coffee_beans_item);
  }
});
