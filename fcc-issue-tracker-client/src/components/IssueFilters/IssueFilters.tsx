import * as React from 'react'

import IssueFields from '../../constants/issue-fields'
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
      ...IssueFields,
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