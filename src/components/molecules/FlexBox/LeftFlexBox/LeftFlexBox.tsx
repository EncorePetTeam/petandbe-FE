import React, { ReactNode } from 'react'

interface LeftFlexBoxProps {
  children? :ReactNode;
  width?: string;
}

const LeftFlexBox = ({children, width} :LeftFlexBoxProps) => {
  return (
    <div className='flexbox-left'>
      {children}
      <style jsx>{`
        .flexbox-left {
          width: ${width};
        }
      `}</style>
    </div>
  )
}

export { LeftFlexBox }