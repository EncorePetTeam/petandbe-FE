import Link from 'next/link';
import React from 'react'
import DatePicker from 'react-datepicker'
import { dataSetCommas } from '../../../../pages/api/dataSet';

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
  console.log(room)
  return (
    <div className='room'>
      <Link href={{ 
        pathname: `/detail/select/${id}`,
        query: { room : JSON.stringify(room)}
      }} >
      <img src="" alt="" className='room__img'/>
      <h3>{name}</h3>
      <span>{item}</span>
      <div className='flex__area'>
        <span>숙박({startTime} ~)</span>
        <span className='text--bold'>{dataSetCommas(weekdays)}원</span>
      </div>
      <button>객실 선택하기</button>
      </Link>
      <style jsx>{`
        .room {
          width: calc(50% - 40px - 1px);
          border: 0.5px solid #ccc;
          padding: 20px;
        }
        .room__img {
          width: 100%;
          aspect-ratio: 1 / 0.6;
          background-color: #eee;
        }
        .flex__area {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        h3 {
          margin: 5px 0;
        }
        button {
          background: #de2e5f;
          border-color: #de2e5f;
          color: #ffffff;
          border-radius: 0.4rem;
          width: 12rem;
          height: 2.2rem;
          float: right;
          cursor: pointer;
        }
        .text--bold {
          font-weight: 600;
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}

export { DetailRoom }