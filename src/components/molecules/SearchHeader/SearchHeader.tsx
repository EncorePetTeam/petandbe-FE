import React from 'react'
import { Button } from '../../atoms/Button';

interface SearchProps<T> {
  btnGroup :Array<T>;
}

interface BtnProps {
  btnText :string
}

const SearchHeader = ({btnGroup} :SearchProps<BtnProps>) => {
  return (
    <div>
      {
        btnGroup.map(({btnText},i) => 
          <Button btnText={btnText} key={i} />
        )
      }
    </div>
  )
}

export { SearchHeader };