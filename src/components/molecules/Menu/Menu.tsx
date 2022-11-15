import React from 'react'
import { Label } from '../../atoms/Label'
import styles from './Menu.module.scss'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className={styles.menu}>
      <Label content='호스트 되기'/>
    </div>
  )
}

export { Menu }