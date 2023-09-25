1. 포폴 소개
  주색: #fff, #000, #333
  보조색 : #f9f9f9

id: admin, pw: asdfasdf

2. 페이지 구성
  common
    - 로그인 전용 쿠키의 값으로 로그인을 판별하고 회원용 헤더, 비회원용 헤더를 보여줌.

  index
    1. 스크롤 이벤트 
      - 스크롤 내리면 헤더가 fixed.
      - slogun 텍스트가 나옴.
    2. TOP 버튼
      - 화면 최상단으로 이동
    3. swiper js
      - popup, menu 이미지 슬라이드
    4. 팝업창 끌고 다니기
    5. 팝업창 전용 쿠키를 사용해서 오늘 하루 닫기 기능 구현
    6. simple(hover): 배경색 변경
    7. menu(hover): menu_info 띄우기

  menu_introduce
    - 탭(HAND-DRIP, ESPRESSO, NON-COFFEE, TEA) 클릭시 그에 맞는 음료 리스트 나오도록 구현
  
  about
    - 카카오 맵 API 사용

  login
    - input에 foucs 했다가 아무 것도 입력하지 않고 blur 하면 입력란을 채워달라는 텍스트를 보여준다.
    - input을 하나라도 비운 상태로 로그인 버튼을 누르면 입력란을 채워달라는 텍스트를 보여준다.
    - dummy에 저장되어있는 회원정보와 다른 id/pw를 입력하고 로그인하면 로그인 실패 modal창을 띄워준다.
    - dummy에 저장되어있는 회원정보와 같은 id/pw를 입력하고 로그인하면 로그인 성공 modal창을 띄워주면서 로그인 쿠키를 생성한다.

  join
    - 아무 것도 채우지 않고 회원가입 버튼을 클릭하면 입력란을 채우라는 텍스트를 보여준다.
    - password를 입력하지 않고 password-check를 클릭하면 password로 focus 되면서 입력란을 채우라는 텍스트를 보여준다.
    - password와 password-check를 입력하고 blur했을 때, 둘이 값이 같으면 비밀번호가 일치하다고 텍스트를 보여주고, 다르면 비밀번호를 확인해달라는 텍스트를 보여준다.
    - email에 @와 com || co || net 이 들어있지 않으면 회원가입 버튼 클릭 안됨
    - phone-number에 xxx-xxxx-xxxx 형식으로 자동적으로 하이픈이 들어가도록 구현.

  find id, find pw
    - dummy 데이터와 비교해서 같은 데이터라면 id를 담은 modal창을 띄운다.

  edit_profile
    - 비밀번호가 이전 비밀번호와 같으면 이전과 같은 비밀번호라고 텍스트 modal창을 띄운다.

  order
    - 주문목록이 없을 때는 주문하기 버튼이 클릭이 안되게 구현.
    - 총액이 0원일 때 포인트 input 클릭 시 메뉴 선택 먼저 하라는 텍스트 modal 띄움.
    - 메뉴 선택 시 왼쪽 목록으로 추가
    - 같은 메뉴 클릭 시 목록에서 같은 메뉴가 있는지 확인 후 pcs 증가
    - pcs -, + 버튼 클릭 시 pcs 값이 바뀌고 합계도 바뀐다.
    - 포인트 사용은 총액보다 적게 입력해야하고, 자신의 포인트보다 넘치지 않게 입력해야한다.
    - 위를 어길 시 modal창 띄움
    - 주문목록이 있을 때 주문하기 버튼이 눌림

  my_order
    - logined_user_id가 로그인 된 계정이라고 가정하고, dummy 데이터에서 userId와 비교해서 같은 것을 가져온다.

  point
    - logined_user_id가 로그인 된 계정이라고 가정하고, dummy 데이터에서 userId와 비교해서 같은 것을 가져온다.

  
