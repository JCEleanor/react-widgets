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
      <Route path="/react-widgets/youtube-search">
        <Youtube />
      </Route>
      <Route path="/react-widgets/wiki-search">
        <Search />
      </Route>
      <Route path="/react-widgets/cart">
        <Cart />
      </Route>
      <Route path="/react-widgets/translate">
        <Translate />
      </Route>
      <Route path="/react-widgets/todo">
        <TodoList />
      </Route>
    </div>
  )
}

export default App
