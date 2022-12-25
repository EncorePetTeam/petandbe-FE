import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { DetailAreaInfo } from '../../../components/atoms/Detail/DetailAreaInfo';
import { DetailImage } from '../../../components/atoms/Detail/DetailImage';
import { SeoHead } from '../../../components/atoms/SeoHead';
import { DetailRoomInfo } from '../../../components/molecules/Detail/DetailRoomInfo';

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
  const productsName = 'Ex'
  const router = useRouter()
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${productsName}`} />
      {/* <DetailMenu /> */}
      <div>
        <DetailImage />
        <DetailAreaInfo room={JSON.parse(router.query.room)}/>
      </div>
      <div className='room'>
      </div>
      <div>
        판매자정보
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
      `}</style>
    </div>
  )
}

export default RoomPage;
