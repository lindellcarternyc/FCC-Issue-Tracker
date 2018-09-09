import * as React from 'react'

import { StyleGroup } from './styles'

import Header from './components/Header'
import IssueCardGroup from './components/IssueCardGroup'
import IssueFilters from './components/IssueFilters'

import Modal from './components/Modal'

const AppStyles: StyleGroup = {
  main: {
    paddingTop: '100px'
  }
}

interface AppState {
  modalIsOpen: boolean
}

class App extends React.Component<{}, AppState> {
  public readonly state: AppState = {
    modalIsOpen: false
  }

  public render() {
    const { modalIsOpen } = this.state

    return (
      <div className="App">
        <Header openModal={this.toggleModal}/>
        {modalIsOpen && (
          <Modal title="Filters"
            close={this.toggleModal}
          >
            <IssueFilters onCancel={this.toggleModal}/>
          </Modal>
        )}
        <main style={AppStyles.main}>
          <IssueCardGroup />
        </main>
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
}

export default App
