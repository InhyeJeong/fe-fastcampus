import { render, screen } from '@testing-library/react'
import Menu from '../components/Menu'

describe('Menu', () => {
  it('fastcampus라는 텍스트를 가지고 있어야한다.', () => {
    render(<Menu />)
    const menuText = screen.getByText('fastcampus')
    expect(menuText).toBeInTheDocument()
  })
})
