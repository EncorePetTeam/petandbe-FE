import { useRouter } from 'next/router'
import React from 'react'
import { Logo } from '../../atoms/Logo'
import { SearchHeader } from '../../molecules/SearchHeader'

type Props = {}

const btnHomeGroup = [
  {
    btnText: '어디든지',
  },
  {
    btnText: '언제든 일주일',
  },
]

const btnSearchGroup = [
  {
    btnText: '검색 시작하기'
  }
]

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <nav className={router.pathname === '/' ? 'nav fixed' : 'nav'}>
      <Logo />
      <SearchHeader btnGroup={btnHomeGroup} />
      Header
    </nav>
  )
}

export { Header }