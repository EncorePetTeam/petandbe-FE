import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'

interface FlexBoxProps {
  children :ReactNode;
}

const FlexBox = ({ children } :FlexBoxProps) => {
  const router = useRouter();
  return (
    <div className={router.pathname === '/' ? 'flexbox home' : 'flexbox'}>
      {children}
      <style jsx>{`
        .flexbox {
          display: flex;
          width: 100%;
        }
        .home {
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}

export { FlexBox }