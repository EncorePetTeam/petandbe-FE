import React from 'react'
import styles from './HomeMenuIcon.module.scss'
import { FaHotel } from 'react-icons/fa'
import { GiDogHouse } from 'react-icons/gi'
import { Label } from '../../Label'

type Props = {}

interface HomeMenuProps {
  id :number;
  icon? :string;
  content :string;
  active :boolean;
}

const HomeMenuIcon = ({id, icon, content, active} :HomeMenuProps) => {
  return (
    <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      {id === 3 ? <GiDogHouse className={styles.icon} /> : <FaHotel className={styles.icon}/> }
      <Label content={content} fontSize='18px'/>
    </div>
  )
}

export { HomeMenuIcon }