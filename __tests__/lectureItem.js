import { render, screen } from '@testing-library/react'
import LectureItem from '../components/lecture/LectureItem'

describe('강의 아이템은', () => {
  it('썸네일을 가지고 있어야한다.', () => {
    render(<LectureItem />)
    const thumb = screen.getByAltText('초격차 패키지')
    expect(thumb).toBeInTheDocument()
  })

  it('뱃지를 가지고 있어야한다.', () => {
    render(<LectureItem />)
    const badge = screen.getByText('평생소장')
    expect(badge).toBeInTheDocument()
  })

  it('강의제목을 가지고 있어야한다.', () => {
    render(<LectureItem />)
    const title = screen.getByRole('heading', {
      name: '초격차 패키지: 한번에 끝내는 AWS',
    })
    expect(title).toBeInTheDocument()
  })

  it('강의 설명을 렌더링 해야한다.', () => {
    render(<LectureItem />)
    const desc = screen.getByText(/개발\/운영\/모두를 아우르는 강의/g)
    expect(desc).toBeInTheDocument()
  })
})
