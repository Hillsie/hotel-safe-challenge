// import { Button } from '../components/Button/Button'
import { Display } from '../components/Display/Display'
import { KeyPad } from '../components/KeyPad/KeyPad'
import { StatusLED } from '../components/StatusLED/StatusLED'

import styles from '../styles/safeChallengePage.module.scss'

function SafeChallengePage (): JSX.Element {
  return (
    <div className={styles.safeChallengeContainer}>
      <div className={styles.safePanel}>
        <KeyPad />
        <div className={styles.safeDisplay}>
          <Display />
          <StatusLED />
        </div>
      </div>
    </div>
  )
}

export { SafeChallengePage }
