import React from 'react'

interface LabelProps {
  fontWeight? :string
  fontSize? :string
}

const Label = ({fontWeight, fontSize} :LabelProps) => {
  return (
    <div>
      <span className='label'></span>
      <style jsx>{`
        .label {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
        }
      `}</style>
    </div>
  )
}

export { Label }