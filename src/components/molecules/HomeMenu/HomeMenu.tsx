import { useRouter } from 'next/router'
import React from 'react'
// import { HomeMenuIcon } from '../../Home/HomeMenuIcon'
import { Title } from '../../atoms/Title'
import { TitleMenu } from '../../atoms/Title/TitleMenu'
import { HomeMenuIcon } from '../../atoms/Home/HomeMenuIcon';

type Props = {}

const menuIcons = [
  {
    id: 1,
    content: '애견호텔',
    active: true,
  },
  {
    id: 2,
    content: '애견카페',
    active: false,
  },
  {
    id: 3,
    content: '애견수영장',
    active: false,
  },
]
const HomeMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className={router.pathname === '/' ? 'home-menu fixed' : 'home-menu'}>
      {menuIcons 
        && menuIcons.map((current)=><HomeMenuIcon key={current.id} content={current.content} active={current.active}/>)
      }
      {/* <HomeMenuIcon /> */}
    </div>
  )
}

export { HomeMenu }
