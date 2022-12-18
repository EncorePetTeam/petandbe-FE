import React from 'react'

type Props = {}

const DetailRoomInfo = (props: Props) => {
  return (
    <div>
      <div className='flex__area'>
        <div className="date__area">
          2022.12.27 ~ 2022.12.28
        </div>
      </div>
      <div></div>
      <style jsx>{`
        .flex__area {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #ccc;
        }
        .date__area {
          width: calc(100% - 40px - 20px);
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0 10px;
        }
      `}</style>
    </div>
  )
}

export { DetailRoomInfo }