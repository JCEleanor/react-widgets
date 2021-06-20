import React, { useState } from 'react'
import Header from './components/Header'
import Route from './components/Route'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
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
const options = [
  {
    label: 'Chinese',
    value: 'zh-TW',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
]

function App() {
  const [language, setLanguage] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion data={dummyData} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a language"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
