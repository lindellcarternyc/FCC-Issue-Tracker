import * as React from 'react'

import { Colors, StyleGroup } from '../styles'

import Form, { FormProps } from './Form'

import IssueFields from '../constants/issue-fields'

const NewIssueStyles: StyleGroup = {
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

interface NewIssueProps {
  onCancel: () => void
}

const NewIssue = (props: NewIssueProps) => {
  const formProps: FormProps = {
    inputs: [
      ...IssueFields
    ],
    onCancel: props.onCancel
  }
  return (
    <div style={NewIssueStyles.container}>
      <h2 style={NewIssueStyles.title}>New Issue</h2>
      <Form {...formProps}/>
    </div>
  )
}

export default NewIssue