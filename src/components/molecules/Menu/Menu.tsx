import React from 'react'
import { Label } from '../../atoms/Label'
import styles from './Menu.module.scss'
import { RiGlobalLine } from 'react-icons/ri'
import { LoginMenu } from '../../atoms/LoginMenu'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className={styles.menu}>
      <Label content='호스트 되기'/>
      <RiGlobalLine />
      <LoginMenu />
    </div>
  )
}

export { Menu }