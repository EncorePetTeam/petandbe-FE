import React from 'react'
import { Title } from '../../Title'
import {BsHeartFill, BsHeart, BsShareFill} from 'react-icons/bs'

interface DetailAreaInfoProps<T> {
  room :Array<T>
}

interface AreaInfo {
  id :number;
  name :string;
  score :number;
  title :string;
  parking :boolean;
}

const DetailAreaInfo = ({ room } :DetailAreaInfoProps<AreaInfo>) => {
  const { id, name, score, title, parking } = room;
  return (
    <div className='host__area'>
      {name}
      <div className="host__flex">
        <h2>{title}</h2>
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
      <div>별점(7,148) > </div>
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