import * as React from 'react'

import { StyleGroup } from '../../../styles'

const IssueCardHeaderStyles: StyleGroup = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid black',
    paddingBottom: '0.5rem'
  },
  title: {
    fontSize: '1.5rem'
  },
  username: {
    fontSize: '0.85rem'
  }
}

const IssueCardHeader = () => {
  return (
    <header style={IssueCardHeaderStyles.header}>
        <div>
          <h1 style={IssueCardHeaderStyles.title}>Title</h1>
          <p style={IssueCardHeaderStyles.username}>Created by: Creator</p>
          <p style={IssueCardHeaderStyles.username}>Assigned to: Person</p>
        </div>
        <button>Close</button>
      </header>
  )
}

export default IssueCardHeader