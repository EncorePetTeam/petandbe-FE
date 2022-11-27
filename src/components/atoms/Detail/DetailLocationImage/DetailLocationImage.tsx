import React from 'react'
import { FlexBox } from '../../../molecules/FlexBox';
import { Title } from '../../Title';
import styles from './DetailLocationImage.module.scss';

interface DetailLocationImageProps<T> {
  detailLocationImage :Array<T>
}

interface DetailLocationImage {
  id :number;
  title :string;
  content :string;
}


const DetailLocationImage = ({ detailLocationImage } :DetailLocationImageProps<DetailLocationImage>) => {
  return (
    <>
      <Title title='숙박 장소' />
      <FlexBox>
        {detailLocationImage.map((current)=>
          <div className={styles.location}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <p className={styles.title}>{current.title}</p>
              {current.content}
            </div>
          </div>
        )}
      </FlexBox>
    </>
  )
}

export { DetailLocationImage }