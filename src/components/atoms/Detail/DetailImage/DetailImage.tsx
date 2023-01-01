import React from 'react'
import styles from './DetailImage.module.scss'

interface DetailImageProps {
  imgUrl? : Array<string>,
}

const DetailImage = ({ imgUrl } :DetailImageProps) => {
  return (
    <div className={styles.image}>
      <img src={imgUrl[0]} alt="이미지" style={{width: '100%'}}/>
    </div>
  )
}

export { DetailImage }