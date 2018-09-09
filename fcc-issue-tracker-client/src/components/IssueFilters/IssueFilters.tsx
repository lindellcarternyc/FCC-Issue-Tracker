import * as React from 'react'

import { StyleGroup } from '../../styles'

import Form, { FormProps } from '../Form'

const IssueFiltersStyles: StyleGroup = {
  container: {
    maxWidth: '400px',
    margin: '0 auto'
  }
}


interface IssueFiltersProps {
  onCancel: () => void
}

const IssueFilters = (props: IssueFiltersProps) => {
  const formProps: FormProps = {
    inputs: [
      {
        name: 'issueTitle', label: 'Issue Title'
      },
      {
        name: 'issueText', label: 'Issue Text'
      },
      {
        name: 'createdBy', label: 'Created By'
      },
      {
        name: 'assignedTo', label: 'Assigned To'
      },
      {
        name: 'statusText', label: 'Status Text'
      },
      {
        name: 'createdOn', label: 'Created On', type: 'date'
      },
      {
        name: 'updatedOn', label: 'Updated On', type: 'date'
      },
      {
        name: 'currentStatus', options: ['All', 'Open', 'Close']
      }
    ],
    onCancel: props.onCancel
  }
  return (
    <div style={IssueFiltersStyles.container}>
      <Form { ...formProps} />
    </div>
  )
}

export default IssueFilters