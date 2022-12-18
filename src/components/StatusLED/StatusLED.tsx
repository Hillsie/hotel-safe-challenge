import styles from './statusLED.module.scss'
function StatusLED(): JSX.Element {
  return (
    <div className={styles.statusLEDContainer}>
      <div className={styles.statusLED} />
    </div>
  )
}

export { StatusLED }
