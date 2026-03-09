  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
     name: 'Using props to pass data',
     exercises: 7
    }
    const part3 = {
      name: 'State of a component',
    exercises : 14
    }

    return (
      <div>
        <Header courseName={course}/>
        <Content 
          part1={part1.name} exercises1={part1.exercises}
          part2={part2.name} exercises2={part2.exercises}
          part3={part3.name} exercises3={part3.exercises} 
        />
        <Total a={part1.exercises} b={part2.exercises} c={part3.exercises} />
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
        <Part name={props.part1} value = {props.exercises1}/>
        <Part name={props.part2} value = {props.exercises2}/>
        <Part name={props.part3} value = {props.exercises3}/>
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
        <p>Total Courses: {props.a + props.b + props.c}</p>
      </div>
    )
  }



  export default App