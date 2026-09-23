const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const Footer = ({ name, course, section }) => {
  return (
    <footer>
      {name} - {course} - {section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 section G6'

  const parts = [
    {
      name: 'Information Management 2',
      exercises: 3
    },
    {
      name: 'Systems Integration',
      exercises: 3
    },
    {
      name: 'Data Analytics',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        name="Jehryn D. Laurino"
        course="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App