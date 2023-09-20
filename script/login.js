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
  $(".btn_submit").click(() => {
    if (domain.includes("/nfbb-cafe")) {
      document.cookie = `login=true;path=/nfbb-cafe`;
    } else {
      document.cookie = `login=true;path=/`;
    }
  });

  // ================= 쿠키 관련 끝 ==================
});
