import React, { useState } from 'react'
import styles from './Image.module.scss'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import Link from 'next/link';

interface ImageProps {
  contentId :number;
  contentLike :boolean;
  isActiveBookmark :any;
  imageUrl :string;
}

const Image = React.memo(({ contentId, contentLike, isActiveBookmark,imageUrl } :ImageProps) => {
  console.log(contentId, contentLike)
  return (
    <div className={styles.background}>
      <Link href={`/detail/${contentId}`}>
        <div className={styles.image}>
          <img src={imageUrl} alt="" className={styles.img__class}/>
        </div>
      </Link>
      <div className={`${styles.bookmark} ${styles.selected}`} onClick={()=>isActiveBookmark(contentId)}>
        {
          contentLike 
          ? <BsHeartFill className={styles.like}/>
          : <BsHeart />
        }
      </div>
    </div>
  )
})

export { Image }