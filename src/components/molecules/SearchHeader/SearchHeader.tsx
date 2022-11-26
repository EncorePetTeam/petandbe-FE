import React from 'react'
import { Button } from '../../atoms/Button';
import styles from './SearchHeader.module.scss'
import {MdSearch} from 'react-icons/md'

interface SearchProps<T> {
  btnGroup :Array<T>;
  onClickSearch ?:any;
}

interface BtnProps {
  btnText :string;
}

const SearchHeader = ({btnGroup} :SearchProps<BtnProps>) => {
  return (
    <div className={styles.search}>
      {
        btnGroup.map(({btnText},i) => 
          <Button btnText={btnText} key={i} />
        )
      }
      <button className={styles.search__btn}>
        <MdSearch />
      </button>
    </div>
  )
}

export { SearchHeader };