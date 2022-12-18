import { Button } from '../Button/Button'

import styles from './keyPad.module.scss'

function KeyPad (): JSX.Element {
  return (
    <div className={styles.keyPadBorder}>
      <div className={styles.keyPadContainer}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  )
}

export { KeyPad }
