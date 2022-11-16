import React from 'react'
import styles from './LoginMenu.module.scss'
import { HiUserCircle, HiOutlineMenu } from 'react-icons/hi'

type Props = {}

const LoginMenu = (props: Props) => {
  return (
    <div className={styles.login}>
      <HiOutlineMenu />
      <HiUserCircle className={styles.icon}/>
    </div>
  )
}

export { LoginMenu }