import React from 'react'

interface ButtonProps {
  btnText :string;
}

function Button({btnText}: ButtonProps) {
  return (
    <button>
      {btnText}
    </button>
  )
}

export { Button }