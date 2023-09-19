let container = document.getElementById("map");
const map_pos_x = 37.4132584;
const map_pos_y = 127.2528312;
let options = {
  center: new kakao.maps.LatLng(map_pos_x, map_pos_y), // 지도 중심좌표
  level: 1, // 지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

let imgSrc = "../img/marker.png"; // 마커 이미지 주소
let imgSize = new kakao.maps.Size(50, 50); // 마커 이미지 사이즈
let imgOption = { offset: new kakao.maps.Point(27, 69) }; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표 설정

// 마커의 이미지 정보를 가지고 있는 마커이미지를 생성
let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
let markerPosition = new kakao.maps.LatLng(map_pos_x, map_pos_y); // 마커가 표시될 위치

// 마커 생성
let marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImg, // 마커 이미지 설정
});

// 마커가 지도 위에 표시되도록 설정
marker.setMap(map);
