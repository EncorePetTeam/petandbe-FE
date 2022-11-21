/* global kakao */
import React, { useEffect } from "react";
import "../styles/Map.scss";

const { kakao } = window;

function Map  {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options);


  return (
    <div>
    <div id="map" style="width:500px;height:400px;"></div>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=38080ad6a60539440dac888c471a34bf"></script>
    </div>
  );
};

export {Map};