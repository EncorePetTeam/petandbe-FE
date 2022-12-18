import React from 'react'
import { Title } from '../../Title'

type Props = {}

const DetailAreaInfo = (props: Props) => {
  return (
    <div className='host__area'>
      host정보
      <div className="host__flex">
        <h2>영등포 호텔</h2>
        <div>
          <span>1</span>
          <span>2</span>
        </div>
      </div>
      <div>별점(7,148) > </div>
      <div>주차불가</div>
      <style jsx>{`
        .host__area {
          width: calc(100% - 40px);
          height: 100%;
          border-bottom: 1px solid #ccc;
          padding: 20px;
        }
        .host__flex {
          display: flex;
          justify-content: space-between;
        }
        .host__flex h2 {
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}

export { DetailAreaInfo }