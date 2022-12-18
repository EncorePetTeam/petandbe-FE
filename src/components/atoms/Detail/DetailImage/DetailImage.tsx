import React from 'react'
import styles from './DetailImage.module.scss'

interface DetailImageProps {
  url? : string,
}

const DetailImage = ({ url } :DetailImageProps) => {
  return (
    <div className={styles.image}>
      <img src={url} alt="이미지" />
    </div>
  )
}

export { DetailImage }