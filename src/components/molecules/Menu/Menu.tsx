import React, { useState } from 'react'
import { Label } from '../../atoms/Label'
import styles from './Menu.module.scss'
import { RiGlobalLine } from 'react-icons/ri'
import { LoginMenu } from '../../atoms/LoginMenu'
import { Modal } from '../../atoms/Modal'

interface MenuProps {
  openModal ?: any;
}

const Menu = ({ openModal } :MenuProps) => {
  const [menu, setMenu] = useState({ active: false })
  const openMenu = () => {
    setMenu({...menu, active: !menu.active});
  }
  return (
    <div className={styles.menu}>
      <Label content='호스트 되기' fontSize='16px'/>
      <RiGlobalLine className={styles.icon}/>
      <LoginMenu openModal={openModal} openMenu={openMenu} menu={menu.active}/>
    </div>
  )
}

export { Menu }