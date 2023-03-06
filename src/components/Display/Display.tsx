import styles from './display.module.scss'

interface DisplayProps {
  pin: string
}

function Display ({ pin }: DisplayProps): JSX.Element {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.display}>{pin}</div>
    </div>
  )
}

export { Display }
