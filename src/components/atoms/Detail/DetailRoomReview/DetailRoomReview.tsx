import React from 'react'
import styles from './DetailRoomReview.module.scss'
import { RiEmotionHappyLine } from 'react-icons/ri'

type Props = {}

const DetailRoomReview = (props: Props) => {
  return (
    <div className={styles.reviews}>
      <RiEmotionHappyLine className={styles.smile}/>
      <div className={styles.review__title}>
        <span>별 갯수</span>
        <span>이름 | 날짜</span>
      </div>
      <div className={styles.room}>
        <span>객실명</span>
      </div>
    </div>
  )
}

export { DetailRoomReview }