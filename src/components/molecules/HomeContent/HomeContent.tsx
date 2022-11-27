import Link from 'next/link';
import React from 'react'
import { Image } from '../../atoms/Home/HomePageContent';
import { Label } from '../../atoms/Label';
import styles from './HomeContent.module.scss';

interface Content {
  content : {
    location :string;
    distance :number;
    date :string;
    price :number;
    imgUrl :string;
    id :number;
    like :boolean;
  },
  isActiveBookmark :any;
}

const HomeContent = ({ content, isActiveBookmark } :Content) => {
  const { location, distance, date, price, imgUrl, id, like } = content;
  return (
    <div className={styles.contents}>
      <Image contentId={id} contentLike={like} isActiveBookmark={isActiveBookmark}/>
      <Link href={`/detail/${id}`}>
        <div className={styles.content}>
          <Label content={location} fontWeight='700' fontSize='15px'/>
          <Label content={'평점'}/>
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
