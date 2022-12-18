import Link from 'next/link';
import React from 'react'
import { Image } from '../../atoms/Home/HomePageContent';
import { Label } from '../../atoms/Label';
import { FaStar } from 'react-icons/fa'
import styles from './HomeContent.module.scss';

interface Content {
  content : {
    address :string;
    distance :number;
    date :string;
    price :number;
    imgUrl :string;
    accommodationId :number;
    avgRate :number;
    like :boolean;
  },
  isActiveBookmark :any;
}

const HomeContent = ({ content, isActiveBookmark } :Content) => {
  const { address, distance, date, price, imgUrl, accommodationId, like, avgRate } = content;
  return (
    <div className={styles.contents}>
      <Image contentId={accommodationId} contentLike={like} isActiveBookmark={isActiveBookmark}/>
      <Link href={`/detail/${accommodationId}`}>
        <div className={styles.content}>
          <Label content={address} fontWeight='700' fontSize='15px'/>
          <div className={styles.rate}>
            <FaStar />
            <Label content={avgRate}/>
          </div>
          {/* <div className={styles.content__location}></div>
          <div className={styles.content__scope}></div> */}
        </div>
        <Label content={`${distance}km 거리이내`} fontSize='13px' color='#999'/>
        <Label content={date} fontSize='13px' color='#999'/>
        <Label content={`₩${price} /박`} fontWeight='700' fontSize='15px'/>
      </Link>
    </div>
  )
}

export { HomeContent }
