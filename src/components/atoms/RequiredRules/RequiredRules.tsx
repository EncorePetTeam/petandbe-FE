import React from 'react'
import { FlexBox } from '../../molecules/FlexBox'
import { Title } from '../Title'

type Props = {}

const test = [
  {
    id:1,
  },
  {
    id:2,
  },
  {
    id:3,
  },
]

const RequiredRules = (props: Props) => {
  return (
    <div>
      <Title title='알아두어야 할 사항'/>
      <div className="flex">
        {test.map((current)=>
          <div className="content" key={current.id}>
            {current.id}
          </div>
        )}
      </div>
      <style jsx>{`
        .flex {
          display: flex;
          width: 100%;
        }
        .content {
          flex: 1;
        }
      `}</style>     
    </div>
  )
}

export { RequiredRules }