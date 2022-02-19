import { LectureList } from "./LectureList"

export const LectureGroup = (): JSX.Element => {
  return (
    <div title="lectureList">
      <span>Best</span>
      <h2>이번주 베스트셀링 강의</h2>
      <LectureList />
    </div>
  )
}
