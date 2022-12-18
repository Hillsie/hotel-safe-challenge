import * as React from 'react'

const countReducer = (state: any, newState: any): number => newState

interface CountInterface {
  initialCount?: number
  step?: number
}

function Counter ({ initialCount = 0, step = 1 }: CountInterface): JSX.Element {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = (): void => setCount(count + step)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  return <button onClick={increment}>{count}</button>
}

function App (): JSX.Element {
  return <Counter />
}

export default App
