import * as React from 'react'

import { StyleGroup } from '../../../styles'

const IssueCardFooterStyles: StyleGroup = {
  container: {
    borderTop: '1px solid black',
    paddingTop: '0.5rem'
  }
}

const IssueCardFooter = () => {
  return (
    <footer style={IssueCardFooterStyles.container}>
      <button>Edit</button>
      <button>Delete</button>
    </footer>
  )
}

export default IssueCardFooter