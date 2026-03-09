  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises : 14
        }
      ]
    }
    return (
      <div>
        <Header courseName={course.name}/>
        <Content object = {course.parts} />
        <Total object ={course.parts}/>
      </div>
    )
  }

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.courseName}</h1>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <Part name = {props.object[0].name} value = {props.object[0].exercises}/>
        <Part name = {props.object[1].name} value = {props.object[1].exercises}/>
        <Part name = {props.object[2].name} value = {props.object[2].exercises}/>
      </div>
    )
  }

  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>{props.name}: {props.value}</p>
      </div>
    )
  }
  const Total = (props) => {
    console.log(props)
    return (
      <div>
        <p>Total Courses: {props.object[0].exercises + props.object[1].exercises + props.object[2].exercises}</p>
      </div>
    )
  }

  export default App