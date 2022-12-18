import * as React from 'react'

const deriveKeys = (keyVal: string): string => {
  switch (keyVal) {
    case 'Escape':
      return 'clr'
    default:
      return keyVal
  }
}

const useKeyPressHook = (matchKey: string): boolean => {
  const [state, setState] = React.useState(false)
  React.useEffect(() => {
    const listener = (event: Event): void => {
      const { key } = event as KeyboardEvent
      if (matchKey.toLowerCase() === deriveKeys(key).toLowerCase()) {
        setState(true)
      }
    }
    const resetlistener = (): void => {
      setState(false)
    }

    document.addEventListener('keydown', listener)
    document.addEventListener('keyup', resetlistener)
    return () => {
      document.removeEventListener('keydown', listener)
      document.removeEventListener('keyup', resetlistener)
    }
  }, [matchKey])
  return state
}
export { useKeyPressHook }
