import { Display } from '../components/Display/Display'
import { KeyPad } from '../components/KeyPad/KeyPad'
import { StatusLED } from '../components/StatusLED/StatusLED'
import { useHotelSafe } from '../hooks/useHotelSafe'

import styles from '../styles/safeChallengePage.module.scss'

function SafeChallengePage (): JSX.Element {
  const { state, keyPadCB } = useHotelSafe()
  const { pinValue, isLocked } = state

  return (
    <div className={styles.safeChallengeContainer}>
      <div className={styles.safePanel}>
        <KeyPad keyPadCB={keyPadCB} />
        <div className={styles.safeDisplay}>
          <Display pin={pinValue} />
          <StatusLED isLocked={isLocked} />
        </div>
      </div>
    </div>
  )
}

export { SafeChallengePage }
