import React, { ReactNode, useState } from 'react'
import { Modal } from '../../atoms/Modal';
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header'

interface LayOutProps {
  children : ReactNode;
}

type Props = {}

const Layout = ({children} :LayOutProps) => {
  return (
    <div>
      <Header/>
      <main className='main'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout