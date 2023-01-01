import React from 'react'
import styles from './modal.module.scss'

function HouseModal(){
    return(
      <div className={styles.modal}>
        <h1>숙소 등록</h1>
        <h2>숙소 이름</h2>
        <input placeholder='숙소 이름'></input>
        <h2>숙소 종류</h2>
        <select>
            <option>주택</option>
            <option>캠핑카</option>
            <option>주택</option>
            <option>풀빌라</option>
            <option>모텔</option>
            <option>호텔</option>
        </select>
        <h2>숙소의 유형</h2>
        <select>
            <option>공간전체</option>
            <option>개인실</option>
            <option>다인실</option>
        </select>
        <h2>주소</h2>
        <input placeholder="주소를 입력해주세요"></input>
        <input placeholder="상세정보를 입력해주세요"></input>
        <h2>수용 가능 인원</h2>
        <input placeholder="최대인원"> </input>
        <h2>설명</h2>
        <input placeholder="추가정보를 적어주세요"></input>
      </div>

    )
  }
  export {HouseModal}
  
function Hostparam() {
    return(

        <div>
            <h2>사업자 등록증</h2>
            <input type={'file'}>파일선택</input>
            <h2>사업자 등록번호</h2>
            <input placeholder='사업자등록번호를 입력해주세요'></input>
        </div>
    );
} 
    export {Hostparam}