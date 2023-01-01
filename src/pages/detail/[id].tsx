import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { DetailAreaInfo } from '../../components/atoms/Detail/DetailAreaInfo';
import { DetailImage } from '../../components/atoms/Detail/DetailImage';
import { DetailTab } from '../../components/atoms/Detail/DetailTab/DetailTab';
import { Location } from '../../components/atoms/Location';
import { SeoHead } from '../../components/atoms/SeoHead';
import { DetailRoomInfo } from '../../components/molecules/Detail/DetailRoomInfo';
import { GetServerSideProps } from 'next'
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

const DetailPage = ({response,roomInfo} :any) => {
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
