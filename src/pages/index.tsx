import axios from 'axios'
import { useState } from 'react'
import { SeoHead } from '../components/atoms/SeoHead'
import { FlexBox } from '../components/molecules/FlexBox'
import { HomeContent } from '../components/molecules/HomeContent'
import { homeConnectApi } from './api/home/HomeDetail'
import { GetServerSideProps } from 'next'
import { RiContactsBookLine } from 'react-icons/ri'

const HomePage = ({ response } :any) => {
  const [contents, setContents] = useState(response.filteringAccommodationList);
  const isActiveBookmark = (accommodationId :number) => {    
    setContents(contents.map(
      (content :any) => content.accommodationId === accommodationId 
      ? {...content, like: !content.like}
      : content
    ))
  }
  return (
    <div style={{marginTop: '5px'}}>
      <SeoHead title={'펫앤비 | Home'} />
      <FlexBox>
        {contents.map((current :any)=><HomeContent content={current} key={current.accommodationId} isActiveBookmark={isActiveBookmark}/>)}
      </FlexBox>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (await fetch('http://localhost:4000/api/filteringAccommodationList')).json();
  console.log(response)
  return { props: { response } };
}

export default HomePage;