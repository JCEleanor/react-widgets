import React from 'react'
import Header from './components/Header'
import Route from './components/Route'
import Search from './components/Search'
import Cart from './components/shoppingCart/Cart'
import Translate from './components/Translate'
import TodoList from './components/todo/TodoList'
import Youtube from './components/youtube/Youtube'
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
      <Header />
      <Route path="/youtube-search">
        <Youtube />
      </Route>
      <Route path="/wiki-search">
        <Search />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
    </div>
  )
}

export default App
