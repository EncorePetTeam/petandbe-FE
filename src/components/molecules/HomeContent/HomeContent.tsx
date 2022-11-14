import React from 'react'
import { Images } from '../../atoms/HomeContent'
import { Label } from '../../atoms/Label'
import styles from './HomeContent.module.scss'

type Props = {}

const HomeContent = (props: Props) => {
  return (
    <div className={styles.contents}>
      <Images />
      <div className={styles.content}>
        <Label />
        <Label />
        {/* <div className={styles.content__location}></div>
        <div className={styles.content__scope}></div> */}
      </div>
      <Label />
      <Label />
      <Label />
    </div>
  )
}

export { HomeContent }