import * as React from 'react'
import clsx from 'clsx'

import { useKeyPressHook } from '../../hooks/useKeyPressHook'

import styles from './button.module.scss'

export type keyType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'CLR' | '0' | '⇒' | 'ENTER'
interface ButtonProps {
  key: keyType
  keyValue: keyType
  keyPadCB: (pinVal: string) => void
}

function Button ({ key, keyValue, keyPadCB }: ButtonProps): JSX.Element {
  const isPressed = useKeyPressHook(keyValue)
  const onClick = (e: React.SyntheticEvent): void => {
    e.stopPropagation()
    e.preventDefault()
    keyPadCB(keyValue)
  }

  const buttonLabelStyles = clsx(styles.buttonContainer, isPressed ? styles.buttonContainerActive : styles.buttonContainerInActive)
  return (
    <div key={key} className={buttonLabelStyles}>
      <label htmlFor={key} key={key} className={styles.buttonLabel}>
        <input id={key} type='button' value={keyValue} onClick={onClick} />
      </label>
    </div>
  )
}

export { Button }
