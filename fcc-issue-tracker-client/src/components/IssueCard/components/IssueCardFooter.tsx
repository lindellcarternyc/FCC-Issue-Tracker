import * as React from 'react'

import { StyleGroup } from '../../../styles'

const IssueCardFooterStyles: StyleGroup = {
  container: {
    borderTop: '1px solid black',
    paddingTop: '0.5rem'
  }
}

interface IssueCardFooterProps {
  onClickEdit: () => void
}

const IssueCardFooter = (props: IssueCardFooterProps) => {
  return (
    <footer style={IssueCardFooterStyles.container}>
      <button onClick={props.onClickEdit}>Edit</button>
      <button>Delete</button>
    </footer>
  )
}

export default IssueCardFooter