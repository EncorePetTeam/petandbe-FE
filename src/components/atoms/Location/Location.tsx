import React from 'react'
import { Map } from '../Map'

type Props = {}

const Location = (props: Props) => {
  return (
    <div>
      <Map latitude={37.4812845080678} longitude={126.952713197762} />
    </div>
  )
}

export { Location }