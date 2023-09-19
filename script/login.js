// ================= 쿠키 관련 시작 ==================
// cookie 확인

const cookies = document.cookie;
$(".btn_submit").click(() => {
  document.cookie = `login=true;path=/`;
  console.log("sdfsdf");
});

// ================= 쿠키 관련 끝 ==================
