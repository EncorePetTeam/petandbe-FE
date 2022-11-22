import React, { ReactNode } from 'react'

interface RightFlexBoxProps {
  children :ReactNode;
  width ?:string;
}

const RightFlexBox = ({children, width} :RightFlexBoxProps) => {
  return (
    <div className='flexbox-right'>
      {children}
      <style jsx>{`
        .flexbox-right {
          width: ${width};
        }
      `}</style>
    </div>
  )
}

export { RightFlexBox }