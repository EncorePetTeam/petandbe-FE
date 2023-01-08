import React from 'react'
import styles from './SearchHeader.module.scss'
import {MdSearch} from 'react-icons/md'

const SearchHeader = () => {
  return (
    <div className={styles.search}>
      펫앤비를 검색하세요!
      <div className={styles.btn__area}>
        <MdSearch />
      </div>
    </div>
  )
}

export { SearchHeader };