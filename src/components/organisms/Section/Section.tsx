import React from 'react'
import { HomeContent } from '../../molecules/HomeContent'
import styles from './Section.module.scss'

type Props = {}

const main = [
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
  },
]

const Section = (props: Props) => {
  return (
    <div className={styles.section}>
      {main.map((current, i)=><HomeContent content={current} key={i}/>)}
      {/* {main.map((current)=>console.log(current))} */}
    </div>
  )
}

export { Section }