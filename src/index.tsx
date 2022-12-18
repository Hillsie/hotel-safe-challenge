import * as React from 'react'
import ReactDOM from 'react-dom/client'

import { SafeChallengePage } from './pages/SafeChallengePage'

import styles from './styles/index.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className={styles.index}>
      <SafeChallengePage />
    </div>
  </React.StrictMode>
)
