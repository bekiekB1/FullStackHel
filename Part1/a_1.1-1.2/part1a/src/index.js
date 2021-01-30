import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => 
{
  return (
    <>
      <h1> {props.course}</h1>
    </>
  )
}

const Part = (props) =>
{
  return(
    <>
    <p>{props.part} {props.excercise} </p>
    </>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} excercise = {props.excercise1} />
      <Part part = {props.part2} excercise = {props.excercise2} />
      <Part part = {props.part3} excercise = {props.excercise3} />
    </div>
  )
}
// const Content = (props) =>
// {
//   return(
//     <>
//     <p>{props.part} {props.excercise} </p>
//     </>
//   )
// }

const Total = (props) =>
{
  return(
    <>
    <p>Number of excercises {props.tot_exc}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      {/* <Content part = {part1}  excercise = {exercises1}/>
      <Content part = {part2}  excercise = {exercises2}/>
      <Content part = {part3}  excercise = {exercises3}/> */}
      <Content part1 = {part1}  excercise1 = {exercises1}
               part2 = {part2}  excercise2 = {exercises2}
               part3 = {part3}  excercise3 = {exercises3}/>
      <Total tot_exc = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))