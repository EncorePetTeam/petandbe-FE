import { useRouter } from 'next/router'
import React from 'react'
import { HomeMenuIcon } from '../../atoms/HomeMenuIcon'
import { Title } from '../../atoms/Title'
import { TitleMenu } from '../../atoms/Title/TitleMenu'

type Props = {}

const leftTitleMenuItems = [
  { 
    id: 1,
    content: '별점',
    href: false,
    img: '',
  },
  { 
    id: 2,
    content: '후기',
    href: true,
    img: '',
  },
  { 
    id: 3,
    content: '호스트등급',
    href: false,
    img: '',
  },
  { 
    id: 4,
    content: '위치',
    href: true,
    img: '',
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

const HomeMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className={router.pathname === '/' ? 'home-menu fixed' : 'home-menu'}>
      {router.pathname === '/detail' 
        && <div className='detail'>
            <Title title='제목'/>
            <div className="detail__header">
              <TitleMenu menuItems={leftTitleMenuItems}/>
              <TitleMenu menuItems={rightTitleMenuItems}/>
            </div>
          </div>
      }
      {/* <HomeMenuIcon /> */}
    </div>
  )
}

export { HomeMenu }