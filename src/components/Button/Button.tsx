import * as React from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

export type keyType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'CLR' | '0' | '⇒' | 'ENTER'
interface ButtonProps {
  keyValue: keyType
  keyPadCB: (pinVal: string) => void
  keysPressed: [boolean, string | undefined]
}

function Button ({ keyValue, keyPadCB, keysPressed }: ButtonProps): JSX.Element {
  const [debounce, setDebounce] = React.useState(false)
  const [isPressed, keyPressed] = keysPressed
  const onClick = (e: React.SyntheticEvent): void => {
    e.stopPropagation()
    e.preventDefault()
    keyPadCB(keyValue)
  }

  React.useEffect(() => {
    // set the key pressed for the safe
    if (debounce) return
    if (keyPressed === keyValue) {
      keyPadCB(keyValue)
      setDebounce(true)
    }
  }, [keyPressed, keyValue, keyPadCB, debounce, setDebounce])

  React.useEffect(() => {
    // reset debounce
    if (!isPressed) {
      setDebounce(false)
    }
  }, [isPressed, setDebounce])

  const buttonLabelStyles = clsx(styles.buttonContainer, isPressed && keyPressed === keyValue ? styles.buttonContainerActive : styles.buttonContainerInActive)
  return (
    <div key={`_${keyValue}`} className={buttonLabelStyles}>
      <label htmlFor={keyValue} key={keyValue} className={styles.buttonLabel}>
        <input id={keyValue} type='button' value={keyValue} onClick={onClick} />
      </label>
    </div>
  )
}

export { Button }
