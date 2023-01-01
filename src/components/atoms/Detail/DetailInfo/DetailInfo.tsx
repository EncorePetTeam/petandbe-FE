import React from 'react'
import { MdOutlineChair } from 'react-icons/md'
import styles from './DetailInfo.module.scss'

interface DetailInfoProps<T> {
  detailInfo : Array<T>
}

interface DetailInfo {
  id :number;
  title :string;
  content :string;
}

const DetailInfo = ({ detailInfo } :DetailInfoProps<DetailInfo>) => {
  return (
    <>
      
      {detailInfo.map((current) => 
        <div className={styles.flex} key={current.id}>
          <div className={styles.left}>
            <MdOutlineChair />
          </div>
          <div className={styles.right}>
            <h4>{current.title}</h4>
            <span>{current.content}</span>
          </div>
        </div>
      )}
      {/* </FlexBox> */}
    </>
  )
}

export { DetailInfo }

// 6641250756%3A6PizXPvkvVmB3d%3A0%3AAYfXhpEqgKkTB2nKtYIDRRmzou7igEbnKbVqoFInxg