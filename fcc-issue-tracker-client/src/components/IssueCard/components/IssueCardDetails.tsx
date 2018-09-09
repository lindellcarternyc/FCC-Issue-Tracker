import * as React from 'react'

import { StyleGroup } from '../../../styles'  

const IssueCardDetailsStyles: StyleGroup = {
  container: {
    padding: '1rem 0'
  }
}

const IssueCardDetails = () => {
  return (
    <section style={IssueCardDetailsStyles.container}>
      <p>Issue text</p>
      <p>Status text</p>
    </section>
  )
}

export default IssueCardDetails