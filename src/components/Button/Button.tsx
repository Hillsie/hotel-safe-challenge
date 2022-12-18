import styles from './button.module.scss'

function Button (): JSX.Element {
  const onClick = (): void => {
    console.log('clicked')
  }
  return (
    <button className={styles.buttonContainer} type='button' onClick={onClick}>
      <span className={styles.buttonLabel}>1</span>
    </button>
  )
}

export { Button }
