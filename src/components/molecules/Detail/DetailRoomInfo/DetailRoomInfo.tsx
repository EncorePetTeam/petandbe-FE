import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { DetailRoom } from '../../../atoms/Detail/DetailRoom';

interface DetailRoomInfoProps<T> {
  roomInfos :Array<T>;
}

interface RoomInfo {
  amount :number;
  detailInfo ?: string; 
  imageFileUrlList :Array<String>;
  petCategory :string;
  roomId :number;
  roomName :string;
  weight :string;
}

const DetailRoomInfo = ({roomInfos} :DetailRoomInfoProps<RoomInfo>) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className='flex__area'>
        <div className="date__area">
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat= "yyyy-MM-dd"
          className='date__input'
        />
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat= "yyyy-MM-dd"
          className='date__input'
        />        
        </div>
      </div>
      <div className='room__area'>
        {roomInfos.map((current)=><DetailRoom key={current.roomId} room={current}/>)}
      </div>
      <style jsx>{`
        .flex__area {
          width: calc(100% - 40px);
          height: 50px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #ccc;
        }
        .room__area {
          width: 100%;
          display: flex;
          align-items: center;
          // padding: 20px;
          flex-wrap: wrap;
          border-bottom: 1px solid #ccc;
        }
        .date__area {
          display: flex;
          width: calc(100% - 20px);
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