import React from 'react'
import { Title } from '../../Title'
import {BsHeartFill, BsHeart, BsShareFill} from 'react-icons/bs'
import { dataSetCommas } from '../../../../pages/api/dataSet';

interface DetailAreaInfoProps {
  room : {
    accommodationName :string;
    accommodationType :string;
    addressCode :string;
    addressDetail :string;
    averageRate ?:number;
    detailInfo ?:string;
    imageFileUrlList :Array<string>;
    location :string;
    lotNumber :string;
    reviewCount ?:number;
    userNickname :string;
    weekendWorkingHours :string;
    workingHours :string;
    parking ?:string;
  }
}

const DetailAreaInfo = ({ room } :DetailAreaInfoProps) => {
  const { accommodationName, parking } = room;
  console.log(room)
  return (
    <div className='host__area'>
      <div className="host__flex">
        <h2>{accommodationName}</h2>
        <div>
          <span>
            <BsShareFill />
          </span>
          <span>
            {/* {
              contentLike 
              ? <BsHeartFill className='like'/>
              : <BsHeart />
            } */}
            <BsHeart />
          </span>
        </div>
      </div>
      {/* <div>별점({dataSetCommas(reviewLength)}) > </div> */}
      {!parking && <div>주차불가</div>}
      <style jsx>{`
        .host__area {
          width: calc(100% - 40px);
          height: 100%;
          border-bottom: 1px solid #ccc;
          padding: 20px;
          background-color: white;
        }
        .host__flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .host__flex > div > span {
          cursor: pointer;
        }
        .host__flex > div > span + span {
          margin-left: 10px;
        }
        .host__flex h2 {
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}

export { DetailAreaInfo }