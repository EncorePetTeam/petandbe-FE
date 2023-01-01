import React from 'react'
import { idText } from 'typescript'
import { Title, TitleMenu } from '../../atoms/Title'

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

const DetailContents = (props: Props) => {
  return (
    <>
      <Title title='닉네임 님이 운영중인 숙소'/>
      <div className="detail__header">
        <TitleMenu menuItems={leftTitleMenuItems}/>
        <TitleMenu menuItems={rightTitleMenuItems}/>
      </div>
    </>
  )
}

export { DetailContents }