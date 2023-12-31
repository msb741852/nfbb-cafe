## nfbb cafe

### https://msb741852.github.io/nfbb-cafe/

- 2023.09.14
  메인페이지 업로드
  ![screencapture-127-0-0-1-5500-index-html-2023-09-14-01_54_42](https://github.com/msb741852/nfbb-cafe/assets/75235831/0089a259-2eb7-4094-a7f9-c8c454280ecf)

---

- 2023.09.14
  - 비디오 검은 여백을 줄이기 위해 부모의 높이를 조금 더 늘렸다.
  - 심플 메뉴 호버시 배경색 변경
  - 메뉴 이미지 크기들이 작다는 피드백을 받아 scale로 늘려주고 넘치는 부분은 oveflow:hideen으로 해결했다.
  - 이미지 슬라이드 구현
  - 스토어 사진들 사이즈 줄임
    ![screencapture-127-0-0-1-5500-index-html-2023-09-15-02_22_47](https://github.com/msb741852/nfbb-cafe/assets/75235831/a0bbc775-d1bc-4364-8fc5-94392636f1bc)

---

- 2023.09.16
  - 헤더 메뉴에 호버했을 때 100%판 나오면서 해당 상세메뉴가 나오도록 구현

---

- 2023.09.17
  - 팝업창 구현
    ![screencapture-127-0-0-1-5500-index-html-2023-09-17-23_31_31](https://github.com/msb741852/nfbb-cafe/assets/75235831/03e6efe2-3765-406d-a171-a0aa759fe70d)

---

- 2023.09.18
  - 팝업창의 z-index가 menu_info의 z-index보다 낮아서 menu_info위에 팝업이 있을 때 menu_info가 노출되는 부분을 pan(팝업창)의 z-index를 menu_info보다 높여서 해결.
  - 문서의 중간부분에서 새로고침 할 경우 스크롤 이벤트가 발생하지 않아서 스크롤 이벤트가 걸려있는 헤더가 보이지 않았던 부분과 슬로건 섹션이 보이지 않았던 부분을 해결.
    <br> => 웹에 들어가자마자 스크롤탑을 구해서 0이 아닐경우 스크롤탑이 영상의 반보다 내려왔으면 헤더 픽스 & 글자가 나오도록 하고, 헤더의 높이보다 크다면 헤더만 픽스가 되도록 수정.

---

- 2023.09.19
  - 팝업창에서 오늘 하루 닫기 버튼 클릭 시 24시간동안 유효한 쿠키(max-age)를 생성. name이 popup인 쿠키가 존재하는 동안 팝업창을 삭제.
  - 슬라이드 들어가는 부분들
  - top버튼 구현(클릭 시 문서 최상단으로 이동)
  - 슬라이드 기능이 들어있는 팝업, 메뉴 소개를 animate에서 css로 변경
    <br> => animate는 화면을 켜놓지 않아도 큐가 쌓이게 되는데 화면에 돌아왔을 때 밀린 큐들이 실행됨.
  - 메뉴 소개 페이지 추가
  - 원두 소개 페이지 추가
  - about 페이지 구현(맵 : 카카오 맵 API)

---

- 2023.09.20
  - 로그인 페이지 추가
  - 로그인 버튼 클릭 시 login 세션 생성.
  - (MODIFIED) 로그인 세션이 있을 경우 로그인용 헤더 메뉴가 배치되도록 수정
  - (FIX) 팝업창을 만들고 나서 쿠키를 확인하고 팝업창을 삭제하는 형식으로 만들었었는데, 쿠키를 확인하기까지 팝업창이 반짝 보이는 순간이 있었음. <br>
    => 팝업 요소 자체를 쿠키가 없으면 팝업을 만들고, 쿠키가 있으면 아예 만들지 않도록 수정
  - (FIX) 각 페이지에 있는 a태그에 있는 링크를 상대경로에서 절대경로로 변경
  - (ADD) 로그아웃 버튼 추가
  - (MODIFIED) cookie에 login을 포함하는 것만으로 로그인을 확인하는 것이 아니라 로그인의 값을 확인해서 로그인 판별
  - (MODIFIED) github 서버에서도 path값 들어가도록 수정
  - (ADD) 회원가입 페이지 추가 (전화번호 하이픈 넣는 기능 필요)

---

- 2023.09.21
  - (ADD) 아이디 찾기 페이지 추가
  - (ADD) 비밀번호 찾기, 내 정보 변경 페이지 추가
  - (ADD) order페이지 메뉴 클릭시 넘어가는 기능, 가격계산 제외하고 구현
  - (MODIFIED) order페이지 메뉴 스크롤 수정
  - (ADD) 주문 페이지 추가
  - (ADD) 로그인이 필요한 심플메뉴들은 로그인 창 이동

---

- 2023.09.22
  - (MODIFIED) 팝업창 swiper js로 변경

---

- 2023.09.23
  - (MODIFIED) index 페이지 menu 슬라이드 swiper js로 변경

---

- 2023.09.24
  - (ADD) STORE 페이지 추가

---

- 2023.09.25
  - 등록

---

- 2023.09.26
  - 깃헙 페이지 링크 오류 해결(심플 메뉴)
