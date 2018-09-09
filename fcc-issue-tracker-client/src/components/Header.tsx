import * as React from 'react'

import { StyleGroup } from '../styles'

const HeaderStyles: StyleGroup = {
  container: {
    background: 'white',
    position: 'fixed',
    width: '100%',
    padding: '1rem',
  },
  topWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

interface HeaderProps {
  openModal: () => void
}

const Header = (props: HeaderProps) => {
  return (
    <header style={HeaderStyles.container}>
      <div style={HeaderStyles.topWrapper}>
        <h1>Issue Tracker</h1>
        <div>
          <button>New Issue</button>{' '}
          <button onClick={props.openModal}>Show Filters</button>
        </div>
      </div>
    </header>
  )
}

export default Header