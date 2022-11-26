import React from 'react'
import styles from './HomeMenuIcon.module.scss'
import { FaHotel } from 'react-icons/fa'
import { Label } from '../../Label'

type Props = {}

interface HomeMenuProps {
  icon? :string;
  content :string;
  active :boolean;
}

const HomeMenuIcon = ({icon, content, active} :HomeMenuProps) => {
  return (
    <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      <FaHotel className={styles.icon}/>
      <Label content={content} fontSize='18px'/>
    </div>
  )
}

export { HomeMenuIcon }