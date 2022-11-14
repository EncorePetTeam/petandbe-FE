import React from "react";

const index = () => {
  return (
    <div class="main">
      <div class="logo" />
      <div class="UpStart">
        <div class="left">
          <div class="text">
            호스팅을
            <br />
            시작해보세요
          </div>
          <div class="start-btn">
            <button class="btn">호스팅 시작하기</button>
          </div>
        </div>
        <div></div>
      </div>
      <div class="Map">
        <h2>
          호스팅으로 올릴수 있는 <br />
          수입을 확인하세요
        </h2>
        <ul>
          <li>
            <div>
              <div class="text">
                동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*
              </div>
              <br />
              <div class="money">₩2,596,657 /월</div>
            </div>
          </li>
          <li>
            <div class="host-money">
              <div class="text">호스팅 수입</div>
              <br />
              <div>₩112,898/박</div>
            </div>
          </li>
          <li>
            <div>
              <div class="host-day">예약일수:</div>
              <div>23 박/일</div>
              <div />
            </div>
          </li>
        </ul>
      </div>
      <div class="Slide">
        <div class="text">
            <h2>언제 어디서든<br/>
            호스팅 하실수 있습니다</h2>
        </div>
        {/* 이미지 슬라이드 참고 https://popawaw.tistory.com/260*/}
        <div class="swiper-container-main non-scroll">
            <div class="swiper-inner">
              <div class="item">
              </div>
              <div class="text">
              집으로 숙소로 호스팅하면서 자영업자가되어<br/>
              경제적 자유에 한 걸음 더 가까워질 수<br/>
              있었어요.
        </div>
            </div>
        </div>
      </div>
      <div class="Detail">
        <div class="color-area">
          <div>
            <h2 class="detaile-text"> 10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요 </h2>
          </div>
          <button class="detail-btn">자세히 알아보기</button>
        </div>
      </div>
      <div class="Superhost">
        <div class="backimg">
          <h2 class="text">호스팅에 관해 궁금하신 점이 있나요?<br/>슈퍼호스트에게 물어보세요.</h2>
          <button>자세히 알아보기</button>
        </div>
      </div>
      <div class="DownStart">
        <div class="left">
          <div>
            img
          </div>
        </div>
        <div class="right">
         <div class="text">
            호스팅을
            <br />
            시작해보세요
          </div>
          <div class="start-btn">
            <button class="btn">호스팅 시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;