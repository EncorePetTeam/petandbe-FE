import React from 'react'
import styles from './LoginMenu.module.scss'
import { HiUserCircle, HiOutlineMenu } from 'react-icons/hi'

type Props = {
  openModal :any
}

const LoginMenu = ({openModal} :Props) => {
  return (
    <>
      <div className={styles.login}>
        <HiOutlineMenu />
        <HiUserCircle className={styles.icon}/>
        <div className={styles.menu}>
          <ul>
            <li onClick={openModal}>로그인</li>
            <li>회원가입</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export { LoginMenu }