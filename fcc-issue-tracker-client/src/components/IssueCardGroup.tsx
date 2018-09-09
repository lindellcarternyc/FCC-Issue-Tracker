import * as React from 'react'

import { StyleProperties } from '../styles'

import { IssueModel } from '../models/IssueModel'
import IssueCard from './IssueCard'


const IssueCardGroupStyles: StyleProperties = {
  width: 'calc(100% - 40px)',
  maxWidth: '940px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
}

interface IssueCardGroupProps {
  issues: IssueModel[]

  onClickEdit: (id: string) => void
}

const IssueCardGroup = (props: IssueCardGroupProps) => {
  
  const issueCards = props.issues.map(issue => {
    return <IssueCard key={issue._id} issue={issue} onClickEdit={props.onClickEdit} />
  })
  return (
    <section style={IssueCardGroupStyles}>
      {issueCards}
    </section>
  )
}

export default IssueCardGroup