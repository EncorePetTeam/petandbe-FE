import React from 'react'

interface DetailRoomProps<T> {
  room: Array<T>
}

interface RoomInfo {
  id: number;
  name: string;
  item: string;
  startTime: string;
  weekdays: number;
  weekend: number;
}

const DetailRoom = ({ room } :DetailRoomProps<RoomInfo>) => {
  const { id, name, item, startTime, weekdays, weekend } = room;
  return (
    <div className='room'>
      <img src="" alt="" className='room__img'/>
      <h3>{name}</h3>
      <span>{item}</span>
      <div className='flex__area'>
        <span>숙박({startTime} ~)</span>
        <span>{weekdays}원</span>
      </div>
      <button>객실 선택하기</button>
      <style jsx>{`
        .room {
          width: calc(50% - 40px - 2px);
          border: 1px solid #ccc;
          padding: 20px;
        }
        .room__img {
          width: 100%;
          aspect-ratio: 1 / 0.6;
        }
        .flex__area {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        h3 {
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}

export { DetailRoom }