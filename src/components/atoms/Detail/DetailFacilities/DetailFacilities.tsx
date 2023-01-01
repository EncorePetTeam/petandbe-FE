import React from 'react'
import { FlexBox } from '../../../molecules/FlexBox';
import { Title } from '../../Title';
import styles from './DetailFacilities.module.scss';
import { BiBath } from 'react-icons/bi';

interface DetailFacilitiesProps<T> {
  contents :Array<T>;
}

interface DetailFacilities {
  id :number;
  content :string;
}

const DetailFacilities = ({ contents } :DetailFacilitiesProps<DetailFacilities>) => {
  return (
    <>
      <Title title='숙소 편의시설' />
      <div className={styles.flex}>
        {contents && contents.map((current)=>
          <div className={styles.content} key={current.id}>
            <BiBath />
            {current.content}
          </div>
        )}
      </div>
    </>
  )
}

export { DetailFacilities }