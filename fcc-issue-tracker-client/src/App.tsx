import * as React from 'react'

import { StyleGroup } from './styles'

import Header from './components/Header'
import IssueCardGroup from './components/IssueCardGroup'
import IssueFilters from './components/IssueFilters'

import IssueForm from './components/IssueForm'
import Modal from './components/Modal'
import { IssueModel } from './models/IssueModel'

import { Issues } from './mocks/issues'

const AppStyles: StyleGroup = {
  main: {
    paddingTop: '100px'
  }
}

interface AppState {
  modalIsOpen: boolean
  isCreatingIssue: boolean
  issues: IssueModel[]
  editingIssue: IssueModel | null
}



class App extends React.Component<{}, AppState> {
  public readonly state: AppState = {
    modalIsOpen: false,
    isCreatingIssue: false,
    issues: [...Issues],
    editingIssue: null
  }

  public render() {
    const { modalIsOpen, isCreatingIssue, editingIssue } = this.state

    return (
      <div className="App">
        <Header 
          modalIsOpen={modalIsOpen}
          isCreatingIssue={isCreatingIssue}
          openModal={this.toggleModal} 
          startNewIssue={this.startNewIssue}
          isEditingIssue={editingIssue !== null}
        />
        {modalIsOpen && (
          <Modal title="Filters"
            close={this.toggleModal}
          >
            <IssueFilters onCancel={this.toggleModal}/>
          </Modal>
        )}
        {this.renderMain()}
      </div>
    )
  }

  private toggleModal = () => {
    return this.setState(({modalIsOpen}) => {
      return {
        modalIsOpen: !modalIsOpen
      }
    })
  }

  private renderMain = () => {
    let mainChildren: JSX.Element
    if ( this.state.isCreatingIssue ) {
      mainChildren = <IssueForm onCancel={this.cancelNewissue}/>
    } else if ( this.state.editingIssue !== null ) {
      mainChildren = <IssueForm onCancel={this.cancelEditingIssue} editingIssue={this.state.editingIssue!}/>
    } else {
      mainChildren = <IssueCardGroup issues={this.state.issues} onClickEdit={this.startEditingIssue} />
    }

    return (
      <main style={AppStyles.main}>
        {mainChildren}
      </main>
    )
  }

  private startNewIssue = () => {
    return this.setState({isCreatingIssue: true})
  }

  private cancelNewissue = () => {
    return this.setState({isCreatingIssue: false})
  }

  private startEditingIssue = (id: string) => {
    const issue = this.state.issues[id]
    return this.setState({editingIssue: issue})
  }

  private cancelEditingIssue = () => {
    return this.setState({editingIssue: null})
  }
}

export default App
