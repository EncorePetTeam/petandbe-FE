import React, { useState } from 'react'
import styles from './Image.module.scss'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import Link from 'next/link';

interface ImageProps {
  contentId :number;
  contentLike :boolean;
}

const Image = ({ contentId, contentLike } :ImageProps) => {
  return (
    <div className={styles.background}>
      <Link href={`/detail/${contentId}`}>
        <div className={styles.image}>

        </div>
      </Link>
      <div className={`${styles.bookmark} ${styles.selected}`}>
        {
          contentLike 
          ? <BsHeartFill className={styles.like}/>
          : <BsHeart />
        }
      </div>
    </div>
  )
}

export { Image }