import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Logo } from '../../atoms/Logo'
import { HomeMenu } from '../../molecules/HomeMenu'
import { SearchHeader } from '../../molecules/SearchHeader'
import { AiOutlineShoppingCart } from 'react-icons/ai'

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
        <div className='nav__flex'>
          <Logo />
          {/* <SearchHeader onClickSearch={onClickSearch}/> */}
          <SearchHeader />
          <AiOutlineShoppingCart style={{fontSize: '24px', cursor: 'pointer'}}/>
        </div>
        {/* <SearchHeader btnGroup={btnHomeGroup} /> */}
        {/* <Menu openModal={openModal}/> */}
      </nav>
      { router.pathname === '/' && <HomeMenu /> }
      <style jsx>{`
        .nav__flex {
          display: flex;
          width: 100%;
          max-width: 700px;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export { Header }