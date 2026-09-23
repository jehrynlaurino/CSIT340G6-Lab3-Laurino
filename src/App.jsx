const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
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
  const course = {
    name: 'CSIT340 section G6',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Jehryn D. Laurino"
        course="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App