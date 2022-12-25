import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { DetailRoom } from '../../../atoms/Detail/DetailRoom';

type Props = {}

const room = [
  {
    id: 1,
    name: 'StanDard',
    item: '캣타워, 마약방석',
    startTime: '22:00',
    weekdays: 60_000,
    weekend: 100_000
  },
  {
    id: 2,
    name: 'King',
    item: '캣타워, 마약방석',
    startTime: '22:00',
    weekdays: 100_000,
    weekend: 160_000
  },
  {
    id: 3,
    name: 'Deluxe',
    item: '캣타워, 마약방석',
    startTime: '22:00',
    weekdays: 80_000,
    weekend: 120_000
  },
  {
    id: 4,
    name: 'Twin',
    item: '캣타워, 마약방석',
    startTime: '22:00',
    weekdays: 70_000,
    weekend: 110_000
  },
  {
    id: 5,
    name: 'Event',
    item: '캣타워, 마약방석',
    startTime: '22:00',
    weekdays: 50_000,
    weekend: 80_000
  },
]

const DetailRoomInfo = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className='flex__area'>
        <div className="date__area">
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat= "yyyy-MM-dd"
        />
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat= "yyyy-MM-dd"
        />        
        </div>
      </div>
      <div className='room__area'>
        {room.map((current)=><DetailRoom key={current.id} room={current}/>)}
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