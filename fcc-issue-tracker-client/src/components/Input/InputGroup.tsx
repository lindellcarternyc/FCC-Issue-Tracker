import * as React from 'react'

import { StyleGroup } from '../../styles'

import Input from './Input'

export interface InputGroupProps {
  name: string
  options: string[]
}

const InputGroupStyles: StyleGroup = {
  container: {
    border: 0,
    textAlign: 'center'
  }
}

const InputGroup = (props: InputGroupProps) => {
  const { name, options } = props

  const inputs = options.map(option => {
    return (
      <Input 
        name={name}
        label={option} 
        type='radio' 
        key={option} 
        inline={true}
      />
    )
  })

  return (
    <fieldset style={InputGroupStyles.container}>
      {inputs}
    </fieldset>
  )
}

export default InputGroup