import * as React from 'react'

import { Input, InputGroup, InputGroupProps, InputProps } from './Input'

export interface FormProps {
  inputs: Array<InputGroupProps | InputProps>

  onCancel: () => void
}

class Form extends React.Component<FormProps> {
  public render() {
    return (
      <form onSubmit={this.onSubmit}>
      {this.renderInputs()}
        <button onClick={this.onSubmit}>Submit</button>
        <button onClick={this.onCancel}>Cancel</button>
      </form>
    )
  }

  private renderInputs = () => {
    return this.props.inputs.map(input => {
      if ( Object.getOwnPropertyNames(input).indexOf('options') >= 0 ) {
        const groupProps = (input as InputGroupProps)
        return <InputGroup key={groupProps.name} {...groupProps} />
      } else {
        const inputProps = input as InputProps
        return <Input key={inputProps.name} {...inputProps}/>
      }
    })
  }

  private onSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()
  }

  private onCancel = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    this.props.onCancel()
  }
}

export default Form