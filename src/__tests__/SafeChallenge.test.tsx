import { render, screen } from '@testing-library/react'

import { SafeChallengePage } from '../pages/SafeChallengePage'
test('Load Safe Challenge page', () => {
  render(<SafeChallengePage />)
  const linkElement = screen.getByText(/enter/i)
  expect(linkElement).toBeInTheDocument()
})
