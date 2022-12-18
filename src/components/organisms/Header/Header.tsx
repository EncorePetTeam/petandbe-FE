import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Logo } from '../../atoms/Logo'
import { HomeMenu } from '../../molecules/HomeMenu'
import { SearchHeader } from '../../molecules/SearchHeader'
import { Menu } from '../../molecules/Menu'
import { DetailMenu } from '../../molecules/Detail/DetailMenu'

type Props = {}

const btnHomeGroup = [
  {
    btnText: '어디든지',
  },
  {
    btnText: '언제든 일주일',
  },
  {
    btnText: '게스트 추가',
  },
]

const btnSearchGroup = [
  {
    btnText: '검색 시작하기'
  }
]

interface HeaderProps<T> {
  homeHeader ?:Array<T>;
  openModal ?: any;
}

interface HomeProps {
  menuName: string;
}

const Header = ({ homeHeader, openModal } :HeaderProps<HomeProps>) => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const onClickSearch = () => {
    setSearch(!search);
  }
  return (
    <>
      <nav className={router.pathname === '/' ? 'nav fixed' : 'nav'}>
        <Logo />
        <SearchHeader btnGroup={btnHomeGroup} onClickSearch={onClickSearch}/>
        {/* <SearchHeader btnGroup={btnHomeGroup} /> */}
        <Menu openModal={openModal}/>
      </nav>
      { router.pathname === '/' && <HomeMenu /> }
    </>
  )
}

export { Header }