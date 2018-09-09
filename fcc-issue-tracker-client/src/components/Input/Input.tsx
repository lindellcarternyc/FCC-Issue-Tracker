import * as React from 'react'

import { Colors, StyleGroup } from '../../styles'

export interface InputProps {
  name: string

  label?: string
  type?: 'date' | 'radio'
  inline?: true
}

const makeInputStyles = (props: {inline?: true}): StyleGroup => {
  const { inline } = props
  return {
    container: {
      display: inline ? 'inline-block' : 'flex',
      padding: '0.25rem',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    label: {
      fontSize: '0.95rem',
      color: `${Colors.DarkBlue}`,
      paddingBottom: inline ? 0 : '0.5rem',
      display: inline ? 'inline' : 'block',
      textAlign: 'right',
      marginRight: '0.25rem'
    },
    input: {
      border: `1px solid ${Colors.DarkBlue}`,
      width: inline ? 'auto' : '70%',
      padding: '0.25rem 0.5rem',
      color: Colors.DarkBlue
    }
  }
}

const Input = (props: InputProps) => {
  const { label, name, type, inline } = props
  const styles = makeInputStyles({inline})

  return (
    <div style={styles.container}>
      {label && <label htmlFor={name} style={styles.label}>{label}: </label> }
      <input name={name} type={type} style={styles.input}/>
    </div>
  )
}

export default Input