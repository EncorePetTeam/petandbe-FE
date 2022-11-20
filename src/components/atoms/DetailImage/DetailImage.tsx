import React from 'react'
import styles from './DetailImage.module.scss'

type Props = {}

const DetailImage = (props: Props) => {
  return (
    <div className={styles.grid__image}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export { DetailImage }