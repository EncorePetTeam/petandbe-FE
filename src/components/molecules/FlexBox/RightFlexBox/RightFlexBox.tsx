import React, { ReactNode } from 'react'

interface RightFlexBoxProps {
  children ?:ReactNode;
  width ?:string;
  paddingLeft ?:string;
}

const RightFlexBox = ({children, width, paddingLeft} :RightFlexBoxProps) => {
  return (
    <div className='flexbox-right' style={paddingLeft && {paddingLeft: `${paddingLeft}px`}}>
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