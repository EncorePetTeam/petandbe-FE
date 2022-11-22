import React from 'react'

type Props = {}

const DetailReserve = (props: Props) => {
  return (
    <div className='reserve'>
      DetailReserve
      <style jsx>{`
        .reserve {
          // width: calc(40% - 40px - 2px - 40px);
          width: calc(100% - 40px - 2px - 40px);
          margin: 20px 0 20px 40px;
          height: 200px;
          position: sticky;
          top: 40px;
          bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 16px;
          padding: 20px;
        }
      `}</style>
    </div>
  )
}

export { DetailReserve }