import * as React from 'react'

import { StyleProperties } from '../styles'

import IssueCard from './IssueCard'

const IssueCardGroup = () => {
  const IssueCardGroupStyles: StyleProperties = {
    width: 'calc(100% - 40px)',
    maxWidth: '940px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }

  return (
    <section style={IssueCardGroupStyles}>
      {/* Issue Card */}
      {(() => {
        const cards: JSX.Element[] = []
        for ( let i = 0; i < 10; i++) {
          const card = <IssueCard key={i}/>
          cards.push(card)
        }
        return cards
      })()}
    </section>
  )
}

export default IssueCardGroup