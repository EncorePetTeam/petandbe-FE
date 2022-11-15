import React from 'react'

interface LabelProps {
  fontWeight? :string
  fontSize? :string
  content :string
}

const Label = ({fontWeight, fontSize, content} :LabelProps) => {
  return (
    <div>
      <span className='label'>{content}</span>
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