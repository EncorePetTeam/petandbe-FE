import { useState } from 'react'
import { SeoHead } from '../components/atoms/SeoHead'
import { FlexBox } from '../components/molecules/FlexBox'
import { HomeContent } from '../components/molecules/HomeContent'
import { GetServerSideProps } from 'next'

const HomePage = ({ response } :any) => {
  console.log(response)
  const [contents, setContents] = useState(response);
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
  const response = await (await fetch('https://sg.petandbe.com/filtering/accommodation')).json();
  // console.log(response)
  return { props: { response : response.filteringAccommodationList } };
}

export default HomePage;
