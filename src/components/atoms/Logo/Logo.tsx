import React from 'react'
import styles from './Logo.module.scss'
import {MdPets} from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

function Logo({}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  }
  return (
    <div className={styles.logo}>
        <MdPets className={styles.logo__icons} onClick={onClick}/>
        <Link href='/'>
          <h1 className={styles.logo__title}>펫앤비</h1>
        </Link>
    </div>
  )
}

export { Logo }