import * as React from 'react'

import styles from './button.module.scss'

export type keyType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'CLR' | '0' | '⇒' | 'ENTER'
interface ButtonProps {
  // text: keyType
  key: keyType
  keyValue: keyType
  keyPadCB: (pinVal: string) => void
}

function Button({ key, keyValue, keyPadCB }: ButtonProps): JSX.Element {
  const onClick = (e: React.SyntheticEvent): void => {
    e.stopPropagation()
    e.preventDefault()
    e.currentTarget.ATTRIBUTE_NODE.valueOf()
    console.log(e.currentTarget.getAttribute('value'))
    keyPadCB(keyValue)
  }
  return (
    <div key={key} className={styles.buttonContainer}>
      <label htmlFor={key} key={key} className={styles.buttonLabel}>
        <input id={key} type='button' value={keyValue} onClick={onClick} />
      </label>
    </div>
  )
}

export { Button }
