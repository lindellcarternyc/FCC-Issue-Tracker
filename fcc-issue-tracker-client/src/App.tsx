import * as React from 'react'

import { StyleGroup } from './styles'

import Header from './components/Header'
import IssueCardGroup from './components/IssueCardGroup'
import IssueFilters from './components/IssueFilters'

import Modal from './components/Modal'
import NewIssue from './components/NewIssue'

const AppStyles: StyleGroup = {
  main: {
    paddingTop: '100px'
  }
}

interface AppState {
  modalIsOpen: boolean
  isCreatingIssue: boolean
}

class App extends React.Component<{}, AppState> {
  public readonly state: AppState = {
    modalIsOpen: false,
    isCreatingIssue: true
  }

  public render() {
    const { modalIsOpen, isCreatingIssue } = this.state

    return (
      <div className="App">
        <Header 
          modalIsOpen={modalIsOpen}
          isCreatingIssue={isCreatingIssue}
          openModal={this.toggleModal} 
          startNewIssue={this.startNewIssue}
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
      mainChildren = <NewIssue onCancel={this.cancelNewissue}/>
    } else {
      mainChildren = <IssueCardGroup />
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
}

export default App
