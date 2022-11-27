import React, { useEffect } from 'react'
import styles from './Modal.module.scss'

type Props = {
  openModal :any;
}

const Modal = ({openModal} :Props) => {
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"
    }
  },[])
  return (
    <>
      <div className={styles.background} onClick={openModal}></div>
      <div className={styles.whiteground}>
        
      </div>
    </>
  )
}

export { Modal }