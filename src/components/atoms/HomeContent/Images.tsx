import React from 'react'
import styles from './Images.module.scss'
import { BsHeart } from 'react-icons/bs'

type Props = {}

const Images = (props: Props) => {
  return (
    <div className={styles.image}>
      <div className={`${styles.bookmark} ${styles.selected}`}>
        <BsHeart />
      </div>
    </div>
  )
}

export { Images }