import React from 'react'
import styles from './Title.module.scss'

type Props = {}

interface TitleProps {
  title :string;
}

const Title = ({title} :TitleProps) => {
  return (
      <div className={styles.detail__title}>
        <h1>{title}</h1>
      </div>
  )
}

export { Title }