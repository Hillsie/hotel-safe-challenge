import * as React from 'react'

import './switch.styles.css'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {}

interface ButtonProps {
  on: boolean
  className?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick: () => {}
}

class Switch extends React.Component<ButtonProps> {
  render(): JSX.Element {
    const { on, className = '', onClick, ...props } = this.props
    const btnClassName = [className, 'toggle-btn', on ? 'toggle-btn-on' : 'toggle-btn-off'].filter(Boolean).join(' ')
    return (
      <label aria-label='Toggle' style={{ display: 'block' }}>
        <input className='toggle-input' type='checkbox' checked={on} onChange={noop} onClick={onClick} data-testid='toggle-input' />
        <span className={btnClassName} {...props} />
      </label>
    )
  }
}

export { Switch }
