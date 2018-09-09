import * as React from 'react'

import { StyleGroup } from '../styles'

interface ModalProps {
  title: string
  children: JSX.Element

  close: () => void
}

const ModalStyles: StyleGroup = {
  container: {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.8)',
    width: '100vw', height: '100vh',
  },
  wrapper: {
    background: 'white',
    padding: '1rem',
    borderRadius: '4px',
    width: 'calc(100vw - 4rem)',
    minWidth: '250px',
    maxHeight: '100vh',
    position: 'relative',
    top: '50%', left: 'calc(50% - 0.5rem)',
    transform: 'translate(-50%, -50%)',
  },
  closeButton: {
    position: 'fixed',
    top: '0.75rem',
    right: '0.75rem'
  }
}

const Modal = (props: ModalProps) => {
  const onClickModal = (evt: React.SyntheticEvent) => {
    const target = evt.target as HTMLElement
    if ( target.id === 'modal' ) {
      props.close()
    }
  }

  return (
    <div style={ModalStyles.container} onClick={onClickModal} id='modal'>
      <button style={ModalStyles.closeButton} onClick={props.close}>Close</button>
      <div style={ModalStyles.wrapper}>
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </div>
  )
}

export default Modal