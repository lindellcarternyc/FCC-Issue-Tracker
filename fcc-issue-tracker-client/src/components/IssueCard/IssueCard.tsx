import * as React from 'react'

import { StyleGroup } from '../../styles'

import { IssueCardDetails, IssueCardFooter, IssueCardHeader } from './components'

const IssueCard = () => {
  const IssueCardStyles: StyleGroup = {
    article: {
      background: 'white',
      padding: '0.75rem',
      minWidth: '300px',
      marginBottom: '1.5rem',
      borderRadius: '4px'
    } 
  }

  return (
    <article style={IssueCardStyles.article}>
      <IssueCardHeader />
      <IssueCardDetails />
      <IssueCardFooter />
    </article>
  )
}

export default IssueCard