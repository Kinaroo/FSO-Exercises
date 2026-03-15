const Course = props => {
  const { courses } = props

  return (
    courses.map(course =>
      <div key={course.id}>
        <Header courseName={course.name} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Content = (props) => {
  const { course } = props
  return (
    <div>
      {course.parts.map(x => <Part key={x.id} name={x.name} value={x.exercises} />)}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}: {props.value}</p>
    </div>
  )
}
const Total = (props) => {
  const { course } = props
  console.log("props is", props)
  return (
    <div>
      <strong>total of {course.parts.reduce((total, x) => total + x.exercises, 0)} exercises</strong>
    </div>
  )
}

export default Course