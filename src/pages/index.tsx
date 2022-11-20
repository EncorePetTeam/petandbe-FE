import Head from 'next/head'
import Image from 'next/image'
import { SeoHead } from '../components/atoms/SeoHead'
import { HomeSection } from '../components/organisms/HomeSection'

export default function Home() {
  return (
    <div>
      <SeoHead title={'펫앤비 | Home'} />
      <HomeSection />
    </div>
  )
}
