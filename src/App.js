import React from 'react'
import Accordion from './components/Accordion'
const dummyData = [
  {
    title: 'Declarative',
    content:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
  },
  {
    title: 'Declarative',
    content:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
  },
  {
    title: 'Declarative',
    content:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
  },
]

function App() {
  return (
    <div>
      <Accordion data={dummyData} />
    </div>
  )
}

export default App
