import React from 'react'
import { Props } from './List.types'

export default function List({ listItems }: Props): JSX.Element {
  return (
    <ul>
      {listItems.map((listItem, index) => (
        <li key={index}>{listItem}</li>
      ))}
    </ul>
  )
}
