import '@testing-library/jest-dom'
import {cleanup, render, screen} from '@testing-library/react'
import {List} from './List'

afterEach(cleanup)

describe('TextInput unit test', () => {
  render(<List selectedIndex={0} items={[]} renderItem={() => {}} />)
  const element = screen.getByTestId('autocomplete-items-list')

  it('rendering', () => {
    expect(element).toBeInTheDocument()
  })
  it('no elements', () => {
    expect(element).toHaveTextContent('no elements found!')
  })
})
