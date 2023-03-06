import * as React from 'react'

const deriveKeys = (keyVal: string): string => {
  switch (keyVal) {
    case 'Escape':
    case 'Backspace':
    case 'Delete':
      return 'CLR'
    case 'Enter':
      return 'ENTER'
    default:
      return keyVal
  }
}

type KeyPressedHook = [boolean, string | undefined]

const useKeyPressHook = (): KeyPressedHook => {
  const [state, setState] = React.useState(false)
  const [debounce, setDebounce] = React.useState(false)
  const [keyPressed, setKeyPressed] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    const listener = (event: Event): void => {
      const { key } = event as KeyboardEvent

      if (debounce) return
      setKeyPressed(deriveKeys(key))
      setState(true)
      setDebounce(true)
    }

    const keyUpListener = (): void => {
      setDebounce(false)
      setState(false)
      setKeyPressed(undefined)
    }

    document.addEventListener('keydown', listener)
    document.addEventListener('keyup', keyUpListener)

    return () => {
      document.removeEventListener('keydown', listener)
      document.removeEventListener('keyup', keyUpListener)
    }
  }, [debounce, setDebounce])

  return [state, keyPressed]
}
export { useKeyPressHook }
