import React, { ReactNode } from 'react'

interface LeftFlexBoxProps {
  children? :ReactNode;
  width? :string;
  align? :string;
  fontSize? :string;
}

const LeftFlexBox = ({children, width, align, fontSize} :LeftFlexBoxProps) => {
  return (
    <div className='flexbox-left'>
      {children}
      <style jsx>{`
        .flexbox-left {
          width: ${width};
          font-size: ${fontSize}
        }
      `}</style>
    </div>
  )
}

export { LeftFlexBox }