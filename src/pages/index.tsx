import axios from 'axios'
import { useState } from 'react'
import { SeoHead } from '../components/atoms/SeoHead'
import { FlexBox } from '../components/molecules/FlexBox'
import { HomeContent } from '../components/molecules/HomeContent'
import { homeConnectApi } from './api/home/HomeDetail'
import { GetServerSideProps } from 'next'

  // {
  //   location: '중구, 한국',
  //   distance: 50,
  //   date: '11월 14일 ~ 19일',
  //   price: 180200,
  //   imgUrl: '',
  //   id: 21,
  //   like: false,
  //  bookmark accomodationId 값만 날려주면 됨.
  // validation check token 없으면 안됨
  // },

const HomePage = ({ response }) => {
  const [contents, setContents] = useState(response);
  const isActiveBookmark = (accommodationId :number) => {    
    setContents(contents.map(
      (content) => content.accommodationId === accommodationId 
      ? {...content, like: !content.like}
      : content
    ))
  }
  console.log(contents)
  return (
    <div>
      <SeoHead title={'펫앤비 | Home'} />
      <FlexBox>
        {contents.map((current)=><HomeContent content={current} key={current.accommodationId} isActiveBookmark={isActiveBookmark}/>)}
      </FlexBox>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (await fetch('http://localhost:4000/api/filteringAccommodationList')).json();
  return { props: { response } };
  // try {
  //   const response = await axios.get("http://localhost:4000/api/filteringAccommodationList")
  //     .then((result) => console.log(result));
  //   return { props: { response } };
  // } catch(e) {
  //   throw new Error(`${e}`);
  // }
}

export default HomePage;