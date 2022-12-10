import '@testing-library/jest-dom'
import {cleanup, render, screen} from '@testing-library/react'
import {ListItem} from './ListItem'

afterEach(cleanup)

describe('ListItem unit test', () => {
  render(<ListItem>ciao</ListItem>)
  const element = screen.getByText('ciao')

  it('rendering', () => {
    expect(element).toBeInTheDocument()
  })
})
