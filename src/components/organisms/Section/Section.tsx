import React from 'react'
import { DetailImage } from '../../atoms/Detail/DetailImage'
import { DetailReserve } from '../../atoms/Detail/DetailReserve'
import { DetailReview } from '../../atoms/Detail/DetailReview'
import { HostInfo } from '../../atoms/HostInfo'
import { Location } from '../../atoms/Location'
import { RequiredRules } from '../../atoms/RequiredRules'
import { Title } from '../../atoms/Title'
import { DetailHostInfo } from '../../molecules/Detail/DetailHostInfo'
import { FlexBox } from '../../molecules/FlexBox'
import { LeftFlexBox } from '../../molecules/FlexBox/LeftFlexBox'
import { RightFlexBox } from '../../molecules/FlexBox/RightFlexBox'
import styles from './Section.module.scss'

type Props = {}

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

const Section = (props: Props) => {
  return (
    <div>
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

export { Section }