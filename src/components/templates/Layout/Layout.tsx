import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react'
import { Modal } from '../../atoms/Modal';
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header'

interface LayOutProps {
  children : ReactNode;
}

const Layout = ({children} :LayOutProps) => {
  const [modal, setModal] = useState({ active: false });
  const openModal = () => {
    setModal({...modal, active: !modal.active});
  }
  const router = useRouter();
  return (
    <div>
      <Header openModal={openModal}/>
      <main className={router.pathname.includes('/detail') ? `main background-gray` : `main`}>
        {children}
      </main>
      {router.pathname ==='/' && <Footer />}
      {modal.active && <Modal openModal={openModal}/>}
    </div>
  )
}

export default Layout