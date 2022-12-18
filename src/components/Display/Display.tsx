import styles from './display.module.scss'
const Display = (): JSX.Element => {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.display}> </div>
    </div>
  )
}

export { Display }
