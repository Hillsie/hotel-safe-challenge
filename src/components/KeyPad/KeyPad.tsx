import * as React from 'react'

import { useKeyPressHook } from '../../hooks/useKeyPressHook'
import { Button, keyType } from '../Button/Button'

import styles from './keyPad.module.scss'

const keyPadKeys = [
  { value: '1', key: '1' },
  { value: '2', key: '2' },
  { value: '3', key: '3' },
  { value: '4', key: '4' },
  { value: '5', key: '5' },
  { value: '6', key: '6' },
  { value: '7', key: '7' },
  { value: '8', key: '8' },
  { value: '9', key: '9' },
  { value: 'CLR', key: 'CLR' },
  { value: '0', key: '0' },
  { value: '⇒', key: 'ENTER' }
]

interface KeyPadProp {
  keyPadCB: (pinVal: string) => void
}

function KeyPad ({ keyPadCB }: KeyPadProp): JSX.Element {
  const keysPressed = useKeyPressHook()
  return (
    <div className={styles.keyPadBorder}>
      <div className={styles.keyPadContainer}>
        {keyPadKeys.map((data) => (<Button key={data.key as keyType} keyValue={data.key as keyType} keyPadCB={keyPadCB} keysPressed={keysPressed} />))}
      </div>
    </div>
  )
}

export { KeyPad }
