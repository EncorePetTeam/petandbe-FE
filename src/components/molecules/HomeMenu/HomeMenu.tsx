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
    content: '모텔',
    active: true,
  },
  {
    id: 2,
    content: '호텔',
    active: false,
  },
  {
    id: 3,
    content: '펜션/풀빌라',
    active: false,
  },
]
const HomeMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className={router.pathname === '/' ? 'home-menu fixed' : 'home-menu'}>
      <h4 className='menu'>바로가기</h4>
      {menuIcons 
        && menuIcons.map((current)=><HomeMenuIcon key={current.id} content={current.content} active={current.active} id={current.id}/>)
      }
      <style jsx>{`
        .menu {
          width: 100%;
          margin: 0.8rem 0;
        }
      `}</style>
    </div>
  )
}

export { HomeMenu }
