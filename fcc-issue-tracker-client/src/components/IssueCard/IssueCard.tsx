import * as React from 'react'

import { StyleGroup } from '../../styles'

import { IssueCardDetails, IssueCardFooter, IssueCardHeader } from './components'

import { IssueModel } from '../../models/IssueModel'

interface IssueCardProps {
  issue: IssueModel

  onClickEdit: (id: string) => void
}

const IssueCardStyles: StyleGroup = {
  article: {
    background: 'white',
    padding: '0.75rem',
    minWidth: '300px',
    marginBottom: '1.5rem',
    borderRadius: '4px'
  } 
}

const IssueCard = (props: IssueCardProps) => {
  const { issue } = props

  const { title, createdBy, assignedTo, open, text, statusText, _id } = issue
  const onClickEdit = () => {
    props.onClickEdit(_id)
  }
  return (
    <article style={IssueCardStyles.article}>
      <IssueCardHeader 
        title={title}
        createdBy={createdBy}
        assignedTo={assignedTo}
        open={open}
      />
      <IssueCardDetails 
        text={text}
        statusText={statusText}
      />
      <IssueCardFooter onClickEdit={onClickEdit}/>
    </article>
  )
}

export default IssueCard