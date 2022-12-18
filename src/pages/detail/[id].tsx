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

const DetailPage = () => {
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
        <DetailImage />
        <DetailAreaInfo />
      </div>
      <div>
        <DetailTab tabItems={tabItems} tabHandle={handleTabItem} selectTab={selectTab}/>
        { selectTab === 1 
          ? <DetailRoomInfo />
          : null
        }
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
    </div>
  )
}

export default DetailPage;
