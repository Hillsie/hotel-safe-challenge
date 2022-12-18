import clsx from 'clsx'

import styles from './statusLED.module.scss'
interface StatusLEDProps {
  isLocked: boolean
}
function StatusLED({ isLocked }: StatusLEDProps): JSX.Element {
  const ledStyles = clsx(styles.statusLED, isLocked ? styles.locked : styles.unLocked)
  return (
    <div className={styles.statusLEDContainer}>
      <div className={ledStyles} />
    </div>
  )
}

export { StatusLED }
