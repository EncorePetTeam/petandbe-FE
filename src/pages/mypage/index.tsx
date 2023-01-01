import React from 'react'
import { FlexBox } from '../../components/molecules/FlexBox';
import { LeftFlexBox } from '../../components/molecules/FlexBox/LeftFlexBox/LeftFlexBox';
import { RightFlexBox } from '../../components/molecules/FlexBox/RightFlexBox';

type Props = {}

const MyPage = (props: Props) => {
  return (
    <FlexBox>
      <LeftFlexBox />
      <RightFlexBox />
    </FlexBox>
  )
}

export default MyPage;