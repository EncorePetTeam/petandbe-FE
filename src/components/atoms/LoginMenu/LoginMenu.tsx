import React, { useState } from 'react'
import styles from './LoginMenu.module.scss'
import { HiUserCircle, HiOutlineMenu } from 'react-icons/hi'
import Link from 'next/link'

interface LoginMenuProps {
  openModal :any;
  openMenu :any;
  menu :boolean;
}

const LoginMenu = ({ openModal, menu, openMenu } :LoginMenuProps) => {  
  return (
    <>
      <div className={styles.login} onClick={openMenu}>
        <HiOutlineMenu />
        <HiUserCircle className={styles.icon}/>
      </div>
      <div className={menu ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
        <ul>
          <li onClick={openModal}>로그인</li>
          <li>회원가입</li>
          <li><Link href="/mypage">마이페이지</Link></li>
        </ul>
      </div>
    </>
  )
}

export { LoginMenu }