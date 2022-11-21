import React from 'react'
import styles from './HomeMenuIcon.module.scss'
import { TbBuildingHospital } from 'react-icons/tb'

type Props = {}

interface HomeMenuProps {
  icon :string;
}

const HomeMenuIcon = ({icon} :HomeMenuProps) => {
  return (
    <div className={styles.menu}>
      
    </div>
  )
}

export { HomeMenuIcon }