import * as React from 'react'
import { Colors, StyleGroup } from '../styles'

import Form, { FormProps } from './Form'

import IssueFields from '../constants/issue-fields'
import { IssueModel } from '../models/IssueModel'

const IssueForStyles: StyleGroup = {
  container: {
    backgroundColor: 'white',
    maxWidth: '800px',
    width: 'calc(100% - 4rem)',
    margin: '0 auto',
    padding: '1rem',
    textAlign: 'center'
  },
  title: {
    color: Colors.DarkBlue,
    marginBottom: '0.5rem'
  }
}

interface IssueFormProps {
  onCancel: () => void

  editingIssue?: IssueModel
}

const IssueForm = (props: IssueFormProps) => {
  const formProps: FormProps = {
    inputs: [
      ...IssueFields
    ],
    onCancel: props.onCancel
  }

  const isEditing = props.editingIssue !== undefined
  return (
    <div style={IssueForStyles.container}>
      <h2 style={IssueForStyles.title}>{isEditing ? 'Edit Issue' : 'New Issue'}</h2>
      <Form {...formProps}/>
    </div>
  )
}

export default IssueForm