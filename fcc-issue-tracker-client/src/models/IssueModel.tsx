export interface IssueModel {
  _id: string
  title: string
  text: string
  createdBy: string
  assignedTo: string
  statusText: string
  open: boolean
}