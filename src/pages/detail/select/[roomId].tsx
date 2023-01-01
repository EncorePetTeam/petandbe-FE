import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { DetailAreaInfo } from '../../../components/atoms/Detail/DetailAreaInfo';
import { DetailImage } from '../../../components/atoms/Detail/DetailImage';
import { DetailReview } from '../../../components/atoms/Detail/DetailReview';
import { DetailRoomReview } from '../../../components/atoms/Detail/DetailRoomReview';
import { HostInfo } from '../../../components/atoms/HostInfo';
import { SeoHead } from '../../../components/atoms/SeoHead';
import { GoChevronRight } from 'react-icons/go'

const tabItems = [
  {
    id: 1,
    name: '객실선택'
  },
  {
    id: 2,
    name: '위치/교통'
  },
  {
    id: 3,
    name: '숙소정책'
  },
  {
    id: 4,
    name: '후기'
  },
]

interface RoomPageProps {
  
}


const RoomPage = () => {
  const productsName = 'Ex';
  const router = useRouter();
  // console.log(JSON.parse(router.query.room))
  console.log(router.query.room)
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${productsName}`} />
      {/* <DetailMenu /> */}
      <div>
        <DetailImage imgUrl={JSON.parse(router.query.room).imageFileUrlList}/>
        <DetailAreaInfo room={JSON.parse(router.query.room)}/>
      </div>
      <div className='room'>
        <DetailRoomReview />
        <DetailRoomReview />
      </div>
      <div className='host'>
        <h3>판매자 정보</h3>
        <h3><GoChevronRight /></h3>
      </div>
      {/* <FlexBox>
        <LeftFlexBox width={'60%'}>
          <DetailHostInfo />
        </LeftFlexBox>
        <RightFlexBox width={'40%'}>
          <DetailReserve />
        </RightFlexBox>
      </FlexBox>
      <hr />
      <DetailReview detailReview={detailReview}/>
      <hr />
      <Location /> */}
      {/* <hr />
      <HostInfo />
      <hr />
      <RequiredRules /> */}
      <style jsx>{`
        .room {
          background-color: white;
        }
        .room > div + div {
          border-bottom: 1px solid #ccc;
        }
        .host {
          background-color: white;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }
        .host h3 {
          margin: 0;
          padding: 1.2rem;
        }
      `}</style>
    </div>
  )
}

export default RoomPage;
