import React, { useState } from 'react'
import { FlexBox } from '../../molecules/FlexBox'
import { HomeContent } from '../../molecules/HomeContent'

type Props = {}

const main = [
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 1,
    like: true,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 2,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 3,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 4,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 5,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 6,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 7,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 8,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 9,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 10,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 11,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 12,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 13,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 14,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 15,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 16,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 17,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 18,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 19,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 20,
    like: false,
  },
  {
    location: '중구, 한국',
    distance: 50,
    date: '11월 14일 ~ 19일',
    price: 180200,
    imgUrl: '',
    id: 21,
    like: false,
  },
]

const HomeSection = (props: Props) => {
  const [contents, setContents] = useState(main);
  const isActiveBookmark = (id :number) => {    
    setContents(contents.map(
      (content) => content.id === id 
      ? {...content, like: !content.like}
      : content
    ))        
  }
  return (
    <FlexBox>
      {contents.map((current)=><HomeContent content={current} key={current.id} isActiveBookmark={isActiveBookmark}/>)}
    </FlexBox>
  )
}

export { HomeSection }
