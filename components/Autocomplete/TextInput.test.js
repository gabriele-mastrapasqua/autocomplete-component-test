import '@testing-library/jest-dom'
import {cleanup, render, screen} from '@testing-library/react'
import {TextInput} from './TextInput'

afterEach(cleanup)

describe('TextInput unit test', () => {
  render(<TextInput label="Search" disabled={false} />)
  const element = screen.getByTestId('autocomplete-text-input')

  it('rendering', () => {
    expect(element).toBeInTheDocument()
  })
})
