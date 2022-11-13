import React, { ReactNode } from 'react'
import Header from '../../organisms/Header/Header'

interface LayOutProps {
  children : ReactNode;
}

type Props = {}

const Layout = ({children} :LayOutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout