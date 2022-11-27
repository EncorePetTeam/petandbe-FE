import React, { useState } from 'react'
import { Label } from '../../atoms/Label'
import styles from './Menu.module.scss'
import { RiGlobalLine } from 'react-icons/ri'
import { LoginMenu } from '../../atoms/LoginMenu'
import { Modal } from '../../atoms/Modal'

type Props = {}

const Menu = (props :Props) => {
  const [modal, setModal] = useState({ active: false });
  const openModal = () => {
    setModal({...modal, active: !modal.active});
    console.log(modal)
  }
  return (
    <div className={styles.menu}>
      <Label content='호스트 되기' fontSize='16px'/>
      <RiGlobalLine className={styles.icon}/>
      <LoginMenu openModal={openModal}/>
      {modal.active && <Modal openModal={openModal}/>}
    </div>
  )
}

export { Menu }