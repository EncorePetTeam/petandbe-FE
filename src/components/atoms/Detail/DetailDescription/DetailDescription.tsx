import React from 'react'

interface DetailDescriptionProps {
  detailDescription :string;
}

const DetailDescription = ({ detailDescription } :DetailDescriptionProps) => {
  return (
    <>
      {detailDescription}
    </>
  )
}

export { DetailDescription }