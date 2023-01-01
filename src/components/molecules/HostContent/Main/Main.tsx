import React from 'react'
import styles from './Main.module.scss'
import Link from 'next/link'
import {Slider} from '../../../atoms/Slider/Slider'
// import {Map} from '../../../atoms/Map/Map'

function Main() {
    return (
        <div>
        <div className={styles.UpStart}>
            <div className={styles.content}>
                <h1 className={styles.text}>
                    호스팅을
                    <br />
                    시작해보세요
                </h1>
                <Link href="/host/infor">
                <button  className={styles.btn} ><b>호스팅 시작하기</b></button>
                </Link>
            </div>
        </div>
        <div className={styles.map}>
        <h2>
          호스팅으로 올릴수 있는 <br />
          수입을 확인하세요
        </h2>
        <div className={styles.kakaomap}>
          {/* <Map searchKeyword={''}></Map> */}
        </div>
        <div className={styles.money_text}>
          <div>
              <div className={styles.ex_text}>동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*</div>
          </div>
          <div className={styles.host_money}>
            <div className={styles.left_money}>
              <div className="money">₩2,596,657 /월
              <div className="text">호스팅 수입</div>
              </div>
            </div>
            <div  className={styles.right_money}>
              <div>₩112,898/박</div>
              <div className="host-day">예약일수: 23박/일</div>
            </div>
          <div />
            </div>
          </div>
      </div>
      <div className={styles.slide} >
        <div className={styles.map}>
            <h2 >언제 어디서든<br/>
            호스팅 하실수 있습니다</h2>
        </div>
        {/* 이미지 슬라이드 참고 https://popawaw.tistory.com/260*/}
        <div className="swiper-container-main non-scroll">
            <div className={styles.swiper}>
              <div className="item">  
              <Slider/>
        </div>
            </div> 
        </div>
      </div>
      <div className={styles.superhost}>
        <div className={styles.section}>
          <h2 className={styles.hostingtext}>호스팅에 관해 궁금하신 점이 있나요?<br/>슈퍼호스트에게 물어보세요.</h2>
          <button className={styles.host_button}>자세히 알아보기</button>
        </div>
      </div>
      <div className={styles.downhost}>
        <div className={styles.downleft}>
          <div className={styles.downleft}>
            <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"></img>
          </div>
        </div>
        <div className={styles.downright}>
         <div className={styles.downtext}>
            호스팅을
            <br />
            시작해보세요
          </div>
          <div className={styles.btn_section}>
          <Link href="/host/infor">
            <button className ={styles.downbtn}>호스팅 시작하기</button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    )
}
export {Main}