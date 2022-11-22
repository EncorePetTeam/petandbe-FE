import { useRouter } from 'next/router'
import React from 'react'
import { HomeContent } from '../../molecules/HomeContent'
import styles from './HomeSection.module.scss'

type Props = {}

const main = [
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 1,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 2,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 3,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 4,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 5,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 6,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 7,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 8,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 9,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 10,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 11,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 12,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 13,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 14,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 15,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 16,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 17,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 18,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 19,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 20,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 21,
  },
]

const HomeSection = (props: Props) => {
  return (
    <div className={styles.section}>
      {main.map((current)=><HomeContent content={current} key={current.id}/>)}
    </div>
  )
}

export { HomeSection }