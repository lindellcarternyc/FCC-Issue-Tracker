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

import { IssueModel } from '../../../models/IssueModel' 

type IssueCardHeaderProps = Pick<IssueModel, 'title' | 'createdBy' | 'assignedTo' | 'open'>

const IssueCardHeader = (props: IssueCardHeaderProps) => {
  const { title, createdBy, assignedTo, open } = props
  return (
    <header style={IssueCardHeaderStyles.header}>
        <div>
          <h1 style={IssueCardHeaderStyles.title}>{title}</h1>
          <p style={IssueCardHeaderStyles.username}>Created by: {createdBy}</p>
          <p style={IssueCardHeaderStyles.username}>Assigned to: {assignedTo}</p>
        </div>
        <button>{open ? 'Close' : 'Open'}</button>
      </header>
  )
}

export default IssueCardHeader