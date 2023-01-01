import React from 'react'
import styles from './DetailTab.module.scss'

interface DetailTabProps<T> {
  tabItems :Array<T>;
  tabHandle :any;
  selectTab :number;
}

interface TabItem {
  id :number;
  name :string;
}

const DetailTab = React.memo(({ tabItems, tabHandle, selectTab } :DetailTabProps<TabItem>) => {
  return (
    <ul className={styles.tabItems}>
      {tabItems.map((current)=>
        <li className={selectTab === current.id && styles.active} key={current.id} onClick={()=>tabHandle(current.id)}>{current.name}</li>
      )}
      {/* <li>객실선택</li>
      <li>위치/교통</li>
      <li>숙소정책</li>
      <li>후기</li> */}
    </ul>
  )
})

export { DetailTab }