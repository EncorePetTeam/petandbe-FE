import React from 'react'
import { DetailDescription } from '../../../atoms/Detail/DetailDescription'
import { DetailInfo } from '../../../atoms/Detail/DetailInfo'
import { Title, TitleMenu } from '../../../atoms/Title'
import { FlexBox } from '../../FlexBox'

type Props = {}

const leftTitleMenuItems = [
  {
    id: 1,
    content: '최대 인원 2명',
  },
  {
    id: 2,
    content: '침실 1개',
  },
  {
    id: 3,
    content: '침대 1개',
  },
  {
    id: 4,
    content: '욕실 1개',
  },
]
const rightTitleMenuItems = [
  {
    id: 1,
    content: '프로필',
  },
]

const detailInfo = [
  {
    id :1,
    title: '재택근무에 적합',
    content: '94Mbps의 초고속 와이파이가 제공되며, 개인실에 전용 업무 공간도 마련되어 있습니다.'
  },
  {
    id :2,
    title: '재택근무에 적합',
    content: '94Mbps의 초고속 와이파이가 제공되며, 개인실에 전용 업무 공간도 마련되어 있습니다.'
  },
  {
    id :3,
    title: '재택근무에 적합',
    content: '94Mbps의 초고속 와이파이가 제공되며, 개인실에 전용 업무 공간도 마련되어 있습니다.'
  },
]

const detailDescription = `Escape the busy life and relax in the countryside in Beautiful Kanarraville, UT. Our Friendly cows will meet you off your private back patio!
\n
This serene, private guest home on our family ranch is just 9 miles south of Cedar City. Enjoy our friendly farm animals, orchard, and seasonal garden. 
Escape the busy life and relax in the countryside in Beautiful Kanarraville, UT. Our Friendly cows will meet you off your private back patio!
\n
This serene, private guest home on our family ranch is just 9 miles south of Cedar City. Enjoy our friendly farm animals, orchard, and seasonal garden. 
`

const detailLocationImage = [
  {
    id: 1,
    title: '침실',
    content: '킹사이즈 침대 1개',
  },
  {
    id: 2,
    title: '거실',
    content: '소파베드 1개',
  },
]

const detailFacilities = [
  {
    id: 1,
    content: '주방',
  },
  {
    id: 2,
    content: '주방2',
  },
  {
    id: 3,
    content: '주방3',
  },
  {
    id: 4,
    content: '주방4',
  },
]

const DetailHostInfo = (props: Props) => {
  return (
    <>
      {/* <Title title='닉네임 님이 운영중인 숙소'/> */}
      <div className="detail__header">
        <TitleMenu menuItems={leftTitleMenuItems}/>
        <TitleMenu menuItems={rightTitleMenuItems}/>
      </div>
      <hr />
      <DetailInfo detailInfo={detailInfo}/>
      <hr />
      {detailDescription && 
        <>
          <DetailDescription detailDescription={detailDescription}/>
          <hr />
        </>
      }
    </>
  )
}

export { DetailHostInfo }