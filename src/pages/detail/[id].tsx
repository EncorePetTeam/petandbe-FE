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

const DetailPage = ({response}) => {
  console.log(response.imageFileUrlList)
  const productsName = 'Ex'
  const [selectTab, setSelectTab] = useState(1);
  const handleTabItem = (id :number) => {
    setSelectTab(id);
  }
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${productsName}`} />
      {/* <DetailMenu /> */}
      <div>
        <DetailImage imgUrl={response.imageFileUrlList}/>
        <DetailAreaInfo room={defaultRoom}/>
      </div>
      <div className='room'>
        <DetailTab tabItems={tabItems} tabHandle={handleTabItem} selectTab={selectTab}/>
        { selectTab === 1 && <DetailRoomInfo /> }
        { selectTab === 2 && <Location /> }
        { selectTab === 3 && <Location /> }
        { selectTab === 4 && <Location /> }
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
export const getServerSideProps: GetServerSideProps = async () => {
  // const router = useRouter();
  const response = await (await fetch(`http://localhost:4000/api/accommodationFilter/8`)).json();
  return { props: { response } };
  // try {
  //   const response = await axios.get("http://localhost:4000/api/filteringAccommodationList")
  //     .then((result) => console.log(result));
  //   return { props: { response } };
  // } catch(e) {
  //   throw new Error(`${e}`);
  // }
}

export default DetailPage;
