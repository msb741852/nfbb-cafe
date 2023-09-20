const menu_genre = ["hand-drip", "espresso", "non-coffee", "tea"];

const menu_introduce = [
  {
    menugenre: "non-coffee",
    menuName: "수박 주스",
    price: 5000,
    img_src: "menu01.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "수박 빙수",
    price: 5500,
    img_src: "menu02.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "리치 복숭아 에이드",
    price: 5000,
    img_src: "menu03.png",
  },
  {
    menugenre: "espresso",
    menuName: "아포가토",
    price: 6000,
    img_src: "menu04.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "구름 스무디",
    price: 6000,
    img_src: "menu05.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "망고 스무디",
    price: 6000,
    img_src: "menu06.png",
  },
  {
    menugenre: "espresso",
    menuName: "콜드 웨이브",
    price: 5000,
    img_src: "menu07.png",
  },
  {
    menugenre: "espresso",
    menuName: "바닐라 라떼",
    price: 5000,
    img_src: "menu08.JPG",
  },
  {
    menugenre: "espresso",
    menuName: "카페라떼",
    price: 4500,
    img_src: "menu09.JPG",
  },
  {
    menugenre: "non-coffee",
    menuName: "분다버그 핑크자몽",
    price: 5500,
    img_src: "menu10.JPG",
  },
  {
    menugenre: "hand-drip",
    menuName: "브라질 COE#12",
    price: 7000,
    img_src: "no-image.png",
  },
  {
    menugenre: "hand-drip",
    menuName: "에티오피아",
    price: 6000,
    img_src: "no-image.png",
  },
  {
    menugenre: "hand-drip",
    menuName: "디카페인",
    price: 5500,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "밀크티",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "초코우유",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "복숭아아이스티",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "레몬에이드",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "자몽에이드",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "non-coffee",
    menuName: "체리콬",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "캐모마일",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "히비스커스",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "루이보스",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "페퍼민트",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "잉글리쉬블랙퍼스트",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "자몽차",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "tea",
    menuName: "홍.자",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "에스프레소",
    price: 4000,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "아메리카노",
    price: 4500,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "카푸치노",
    price: 4500,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "카페모카",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "BB크림",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "스위트라떼",
    price: 4500,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "흑당라떼",
    price: 5000,
    img_src: "no-image.png",
  },
  {
    menugenre: "espresso",
    menuName: "샷추가",
    price: 2000,
    img_src: "no-image.png",
  },
];

const popup_img = [
  "popup_img01.jpeg",
  "popup_img02.jpeg",
  "popup_img03.jpeg",
  "popup_img04.jpeg",
];

const coffee_beans = [
  {
    coffeeBeans_name: "에티오피아",
    cupnote: "[컵노트 : 베르가못, 오렌지, 복숭아]",
    sour: 3,
    img_src: "coffeeBeans_red.jpeg",
  },
  {
    coffeeBeans_name: "과테말라",
    cupnote: "[컵노트 : 복숭아, 초콜릿, 바나나]",
    sour: 1,
    img_src: "coffeeBeans_green.jpeg",
  },
  {
    coffeeBeans_name: "브라질 COE#12",
    cupnote: "[컵노트 : 크랜베리, 살구, 호두]",
    sour: 2,
    img_src: "coffeeBeans_yellow.jpeg",
  },
  {
    coffeeBeans_name: "콜롬비아",
    cupnote: "[컵노트 : 귤, 견과류, 구운 옥수수]",
    sour: 1,
    img_src: "coffeeBeans_black.jpeg",
  },
];

const user_info = [
  {
    id: "admin",
    password: "asdfasdf",
    name: "운영자",
    email: "admin@kh.com",
    phone: "010-1234-1234",
  },
];
