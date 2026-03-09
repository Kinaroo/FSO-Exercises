  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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

    return (
      <div>
        <Header courseName={course}/>
        <Content array = {parts} />
        <Total array ={parts}/>
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
        <Part name = {props.array[0].name} value = {props.array[0].exercises}/>
        <Part name = {props.array[1].name} value = {props.array[1].exercises}/>
        <Part name = {props.array[2].name} value = {props.array[2].exercises}/>
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
        <p>Total Courses: {props.array[0].exercises + props.array[1].exercises + props.array[2].exercises}</p>
      </div>
    )
  }

  export default App