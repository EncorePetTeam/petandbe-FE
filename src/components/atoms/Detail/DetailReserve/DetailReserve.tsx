import React from 'react'
import { Title } from '../../Title'
import { Button } from '../../Button'

type Props = {}

const DetailReserve = (props: Props) => {
  return (
    <div className='reserve'>
      {/* <Title title='가격' /> */}
      <div className='input__area'>
        <div className='calendar'>
          <div className="flex__input">
            <input type="text" />
          </div>
          <div className="flex__input">
            <input type="text" />
          </div>
        </div>
        <div></div>
      </div>
      <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
      <Button btnText='예약하기'/>
      <hr/>
      <p>총 합계 : 12312312312</p>
      <style jsx>{`
        .reserve {
          // width: calc(40% - 40px - 2px - 40px);
          width: calc(100% - 40px - 2px - 40px);
          margin: 20px 0 20px 40px;
          height: 400px;
          position: sticky;
          top: 40px;
          bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 16px;
          padding: 20px;
        }
        .input__area {
          display: flex;
          width: 100%;
          height: 120px;
          border: 1px solid #ccc;
          border-radius: 8px;
          flex-wrap: wrap;
        }
        .input__area > div{
          width: 100%;
          border: 1px solid #ccc;
          height: 50%;
        }
        .calendar {
          display: flex;
        }
        .calendar > .flex__input {
          display: flex;
        }
        .calendar > .flex__input + .flex__input {
          border-left: 1px solid #ccc;
        }
        .calendar > .flex__input > input {
          align-self : center;
          width: 100%;
          height: 30px;
          border: none;
        }
      `}</style>
    </div>
  )
}

export { DetailReserve }