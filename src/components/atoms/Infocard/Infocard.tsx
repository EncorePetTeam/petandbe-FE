import React from 'react'
import styles from './Infocard.module.scss'

type Props = {}

const Infocard = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.host__image}></div> {/* 이미지들 통합하기 */}
      <h3 className={styles.h3}>사진 업데이트</h3>
    </div>
  )
}

export { Infocard }