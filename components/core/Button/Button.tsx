import React from 'react'
import Button from '@mui/material/Button';
import { Props } from './Button.types'

export default function ButtonElement({
  text, onClick,
}: Props): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    onClick()
  }
  
  return (
    <Button
      onClick={handleClick}
      color={'primary'}
    >
      {text}
    </Button>
  )
}
