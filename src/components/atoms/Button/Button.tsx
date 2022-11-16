import React from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
  btnText :string;
}

function Button({btnText}: ButtonProps) {
  return (
    <button className={styles.btn}>
      {btnText}
    </button>
  )
}

export { Button }