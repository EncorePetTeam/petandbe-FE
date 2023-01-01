import React from 'react'
import { Title, TitleMenu } from '../../../atoms/Title'

type Props = {}

const leftTitleMenuItems = [
  { 
    id: 1,
    content: '별점',
    href: false,
    img: '',
    divide: true,
  },
  { 
    id: 2,
    content: '후기',
    href: true,
    img: '',
    divide: true,
  },
  { 
    id: 3,
    content: '호스트등급',
    href: false,
    img: '',
    divide: true,
  },
  { 
    id: 4,
    content: '위치',
    href: true,
    img: '',
    divide: true,
  },
]

const rightTitleMenuItems = [
  { 
    id: 1,
    content: '공유하기',
    href: true,
    img: '',
  },
  { 
    id: 2,
    content: '저장',
    href: true,
    img: '',
  },
]

const DetailMenu = (props: Props) => {
  return (
    <div className='detail'>
      <Title title='제목'/>
      <div className="detail__header">
        <TitleMenu menuItems={leftTitleMenuItems}/>
        <TitleMenu menuItems={rightTitleMenuItems}/>
      </div>
    </div>
  )
}

export { DetailMenu }