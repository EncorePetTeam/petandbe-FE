import { useRouter } from 'next/router';
import React from 'react'
import { DetailImage } from '../../components/atoms/Detail/DetailImage';
import { DetailReserve } from '../../components/atoms/Detail/DetailReserve';
import { DetailReview } from '../../components/atoms/Detail/DetailReview';
import { HostInfo } from '../../components/atoms/HostInfo';
import { Location } from '../../components/atoms/Location';
import { RequiredRules } from '../../components/atoms/RequiredRules';
import { SeoHead } from '../../components/atoms/SeoHead';
import { DetailHostInfo } from '../../components/molecules/Detail/DetailHostInfo';
import { DetailMenu } from '../../components/molecules/Detail/DetailMenu';
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

const DetailPage = () => {
  const productsName = 'Ex'
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${productsName}`} />
      <DetailMenu />
      <DetailImage />
      <FlexBox>
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
      <Location />
      <hr />
      <HostInfo />
      <hr />
      <RequiredRules />
    </div>
  )
}

export default DetailPage;
