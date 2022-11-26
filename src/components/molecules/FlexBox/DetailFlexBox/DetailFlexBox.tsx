import React from 'react'

type Props = {}

const DetailFlexBox = (props: Props) => {
  return (
    <div className="detail__flexbox">
      <style jsx>{`
        .detail__flexbox {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export { DetailFlexBox }