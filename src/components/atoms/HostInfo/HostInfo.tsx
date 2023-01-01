import React from 'react'
import { FlexBox } from '../../molecules/FlexBox'
import { LeftFlexBox } from '../../molecules/FlexBox/LeftFlexBox'
import { Title } from '../Title'

type Props = {}

const HostInfo = (props: Props) => {
  return (
    <div className='flex'>
      <div className="host">
        <div className="host__icon"></div>
        {/* <Title title='호스트 : 님' /> */}
      </div>
      <FlexBox>
        <LeftFlexBox width='50%'>
1
        </LeftFlexBox>
      </FlexBox>
      <style jsx>{`
        .flex {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .host {
          display: flex;
          width: 100%;
          align-items: center;
          
        }
        .host__icon {
          width: 70px;
          height: 70px;
          border: 1px solid #ccc;
          border-radius: 50%;
          margin-right: 20px;
          aspect-ratio: auto 1/1;
        }
      `}</style>
    </div>
  )
}

export { HostInfo }