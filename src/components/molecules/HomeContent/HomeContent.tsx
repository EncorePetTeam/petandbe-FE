import Link from 'next/link';
import React from 'react'
import { Image } from '../../atoms/Home/HomePageContent';
import { Label } from '../../atoms/Label';
import { FaStar } from 'react-icons/fa'
import styles from './HomeContent.module.scss';
import { LocationObject } from '../../../pages/api/locationObject';
import { dataSetCommas } from '../../../pages/api/dataSet';

interface Content {
  content : {
    addressCode :string | any;
    location :string;
    lotNumber :string;
    distance :number;
    date :string;
    price :number;
    imageUrl :string;
    accommodationId :number;
    avgRate :number;
    bookmarked :boolean;
    roomAmount :number;
  },
  isActiveBookmark :any;
}

const HomeContent = ({ content, isActiveBookmark } :Content) => {
  const { addressCode, location, lotNumber, distance, date, price, imageUrl, accommodationId, bookmarked, avgRate, roomAmount } = content;
  return (
    <div className={styles.contents}>
      <Image contentId={accommodationId} contentLike={bookmarked} isActiveBookmark={isActiveBookmark} imageUrl={imageUrl}/>
      <Link href={{ 
        pathname: `/detail/${accommodationId}`,
        query: { accommodationId : JSON.stringify(accommodationId)}
      }} >
        <div className={styles.content}>
          <Label content={`${LocationObject[addressCode].area} ${LocationObject[addressCode].district}`} fontWeight='700' fontSize='15px'/>
          <div className={styles.rate}>
            <FaStar />
            <Label content={avgRate}/>
          </div>
          {/* <div className={styles.content__location}></div>
          <div className={styles.content__scope}></div> */}
        </div>
        <Label content={`${distance}km 거리이내`} fontSize='13px' color='#999'/>
        <Label content={date} fontSize='13px' color='#999'/>
        <Label content={`₩${dataSetCommas(roomAmount)} /박`} fontWeight='700' fontSize='15px'/>
      </Link>
    </div>
  )
}

export { HomeContent }
