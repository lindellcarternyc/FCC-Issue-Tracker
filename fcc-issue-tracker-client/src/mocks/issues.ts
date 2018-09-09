import { IssueModel } from '../models/IssueModel'

export const Issues: IssueModel[] = []
for ( let i = 0; i < 10; i++ ) {
  const issue: IssueModel = {
    _id: i.toString(),
    title: 'Issue Title ' + i.toString(),
    text: 'Issue Text',
    statusText: 'Status text',
    createdBy: 'Lindell',
    assignedTo: 'Oliver',
    open: true
  }
  Issues.push(issue)
}

