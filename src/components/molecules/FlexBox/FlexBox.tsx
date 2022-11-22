import React, { ReactNode } from 'react'

interface FlexBoxProps {
  children :ReactNode;
}

const FlexBox = ({ children } :FlexBoxProps) => {
  return (
    <div className='flexbox'>
      {children}
      <style jsx>{`
        .flexbox {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export { FlexBox }