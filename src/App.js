import React from 'react'
import Header from './components/Header'
import Route from './components/Route'
import Search from './components/Search'
import Cart from './components/shoppingCart/Cart'
import Translate from './components/Translate'
import TodoList from './components/todo/TodoList'
import Youtube from './components/youtube/Youtube'

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
