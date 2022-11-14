import React from 'react'
import { HomeContent } from '../../molecules/HomeContent'
import styles from './Section.module.scss'

type Props = {}

const main = [
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: '50km 거리',
    date: '11월 14일 ~ 19일',
    price: '₩180,200 /박',
    imgUrl: '',
  },
]

const Section = (props: Props) => {
  return (
    <div className={styles.section}>
      {main.map((current, i)=><HomeContent />)}
      {/* {main.map((current)=>console.log(current))} */}
    </div>
  )
}

export { Section }