import * as React from 'react'

import { StyleGroup } from '../../../styles'  

const IssueCardDetailsStyles: StyleGroup = {
  container: {
    padding: '1rem 0'
  }
}

import { IssueModel } from '../../../models/IssueModel'

type IssueCardDetailsProps = Pick<IssueModel, 'text' | 'statusText'>

const IssueCardDetails = (props: IssueCardDetailsProps) => {
  const { text, statusText } = props
  return (
    <section style={IssueCardDetailsStyles.container}>
      <p>{text}</p>
      <p>{statusText}</p>
    </section>
  )
}

export default IssueCardDetails