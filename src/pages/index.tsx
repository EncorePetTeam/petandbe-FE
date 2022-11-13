import Head from 'next/head'
import Image from 'next/image'
import { SeoHead } from '../components/atoms/SeoHead'

export default function Home() {
  return (
    <div>
      <SeoHead title={'펫앤비 | Home'} />
    </div>
  )
}
