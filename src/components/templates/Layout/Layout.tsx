import React, { ReactNode } from 'react'
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header'

interface LayOutProps {
  children : ReactNode;
}

type Props = {}

const Layout = ({children} :LayOutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout