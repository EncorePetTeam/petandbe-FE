import React from 'react'
import { Infocard } from '../../components/atoms/Infocard';
import { Label } from '../../components/atoms/Label';
import { Title } from '../../components/atoms/Title';
import { FlexBox } from '../../components/molecules/FlexBox';
import { LeftFlexBox } from '../../components/molecules/FlexBox/LeftFlexBox/LeftFlexBox';
// import { RightFlexBox } from '../../components/molecules/FlexBox/RightFlexBox';

interface MyPageProps {
  openModal ?: any;
}

const MyPage = ({ openModal } :any) => {
  return (
    <FlexBox>
        <LeftFlexBox width={'30%'}>
          <div className="mypage">
            <Infocard />
          </div>
        </LeftFlexBox>
        <div style={{width: '70%', paddingLeft:'15px'}}>
          <div className="mypage">
            {/* <Title title='안녕하세요. 저는 호스트입니다.' /> */}
            <Label content={`회원가입: 2022`} fontSize='13px' color='#999'/>
            <Label content={`프로필 수정하기`} fontSize='13px' color='black'/>
            <Title title='북마크' />
            <div className="bookmark__area">
              <div onClick={openModal}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Title title='내가 쓴 후기' />
            <div className="bookmark__area">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
    </FlexBox>
  )
}

export default MyPage;