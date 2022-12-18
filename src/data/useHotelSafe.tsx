import * as React from 'react'

interface ActionInterface {
  type: string
  pin: string | undefined
}

interface SafeState {
  isLocked: boolean
  pinArray: string[]
  pinValue: string
  sealedPin: string
}

// Todo: use the pin as a clear state
function hotelSafeReducer(state: SafeState, action: ActionInterface): any {
  const { type, pin } = action
  const { pinArray } = state
  let createPin: string[] = []
  console.log(state)
  switch (type) {
    case 'USE_PIN': {
      if (pinArray.length < 4) {
        if (pin !== undefined) {
          createPin = [...pinArray]
          createPin.push(pin)
        }

        return {
          ...state,
          pinArray: createPin,
          pinValue: createPin.join('')
        }
      }

      return { ...state }
    }
    case 'CLEAR_DISPLAY': {
      return {
        ...state,
        pinValue: '',
        pinArray: []
      }
    }
    case 'ENTER_PIN_VALUES': {
      if (state.isLocked) {
        // compare the value
        if (state.pinValue === state.sealedPin) {
          return {
            ...state,
            isLocked: false,
            pinArray: [],
            pinValue: '',
            sealedPin: ''
          }
        }
        return {
          ...state,
          pinArray: [],
          pinValue: 'INVALID'
        }
      }
      if (pinArray.length === 4 && !state.isLocked) {
        const setPinValue = pinArray.join('')
        return {
          ...state,
          isLocked: true,
          pinValue: '',
          pinArray: [],
          sealedPin: setPinValue
        }
      } else {
        return { ...state }
      }
    }
    default: {
      throw new Error('Something went wrong !!')
    }
  }
}

const initialState = {
  isLocked: false,
  pinArray: [],
  pinValue: '',
  sealedPin: '5638'
}

function useHotelSafe(): any {
  const [state, dispatch] = React.useReducer(hotelSafeReducer, { ...initialState })

  const keyPadCB = (pinVal: string): void => {
    switch (pinVal) {
      case 'CLR':
        dispatch({ type: 'CLEAR_DISPLAY', pin: undefined })
        break
      case 'ENTER':
        dispatch({ type: 'ENTER_PIN_VALUES', pin: undefined })
        break
      default:
        dispatch({ type: 'USE_PIN', pin: pinVal })
        break
    }
  }
  return { state, keyPadCB }
}

export { useHotelSafe }
