import React from 'react'
import Dropdown from './components/Dropdown'
// import Accordion from './components/Accordion'
// const dummyData = [
//   {
//     title: 'Declarative',
//     content:
//       'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
//   },
//   {
//     title: 'Declarative',
//     content:
//       'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
//   },
//   {
//     title: 'Declarative',
//     content:
//       'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
//   },
// ]

const options = [
  {
    label: 'red',
    value: 'red',
  },
  {
    label: 'green',
    value: 'green',
  },
  {
    label: 'blue',
    value: 'blue',
  },
]

function App() {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  )
}

export default App
