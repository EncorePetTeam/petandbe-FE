import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { DetailAreaInfo } from '../../components/atoms/Detail/DetailAreaInfo';
import { DetailImage } from '../../components/atoms/Detail/DetailImage';
import { DetailReserve } from '../../components/atoms/Detail/DetailReserve';
import { DetailReview } from '../../components/atoms/Detail/DetailReview';
import { DetailTab } from '../../components/atoms/Detail/DetailTab/DetailTab';
import { HostInfo } from '../../components/atoms/HostInfo';
import { Location } from '../../components/atoms/Location';
import { RequiredRules } from '../../components/atoms/RequiredRules';
import { SeoHead } from '../../components/atoms/SeoHead';
import { DetailHostInfo } from '../../components/molecules/Detail/DetailHostInfo';
import { DetailMenu } from '../../components/molecules/Detail/DetailMenu';
import { DetailRoomInfo } from '../../components/molecules/Detail/DetailRoomInfo';
import { FlexBox } from '../../components/molecules/FlexBox';
import { LeftFlexBox } from '../../components/molecules/FlexBox/LeftFlexBox';
import { RightFlexBox } from '../../components/molecules/FlexBox/RightFlexBox';
import { Section } from '../../components/organisms/Section';
import { GetServerSideProps } from 'next'
import { GoChevronRight } from 'react-icons/go'

const detailReview = [
  {
    id: 1,
    userName: 'Kyla',
    regDate: '2022년 11월',
    content: '10/10 would recommend staying here',
  },
  {
    id: 2,
    userName: 'Kyla',
    regDate: '2022년 11월',
    content: '10/10 would recommend staying here',
  },
  {
    id: 3,
    userName: 'Kyla',
    regDate: '2022년 11월',
    content: '10/10 would recommend staying here',
  },
  {
    id: 4,
    userName: 'Kyla',
    regDate: '2022년 11월',
    content: '10/10 would recommend staying here',
  },
  {
    id: 5,
    userName: 'Kyla',
    regDate: '2022년 11월',
    content: '10/10 would recommend staying here',
  },
]

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

const defaultRoom = {
  id : 1,
  name : '호스트 정보',
  score : 4.7,
  title : '영등포 호텔',
  parking :false,
  reviewLength: 7143,
}

const DetailPage = ({response,roomInfo}) => {
  console.log(response)
  const [selectTab, setSelectTab] = useState(1);
  const handleTabItem = (id :number) => {
    setSelectTab(id);
  }
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${response.accommodationName}`} />
      {/* <DetailMenu /> */}
      <div>
        <DetailImage imgUrl={response.imageFileUrlList}/>
        <DetailAreaInfo room={response}/>
      </div>
      <div className='room'>
        <DetailTab tabItems={tabItems} tabHandle={handleTabItem} selectTab={selectTab}/>
        { selectTab === 1 && <DetailRoomInfo roomInfos={roomInfo.roomRetrievalInfos}/> }
        { selectTab === 2 && <Location /> }
        { selectTab === 3 && <Location /> }
        { selectTab === 4 && <Location /> }
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await (await fetch(`http://localhost:4000/api/accommodationFilter/${context.query.id}`)).json();
  const roomInfo = await (await fetch(`http://localhost:4000/api/roomInfos/${context.query.id}`)).json();
  return { props: { 
                    response,
                    roomInfo
                  } 
                };
}

export default DetailPage;
