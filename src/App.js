import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Search from './components/Search'
import Cart from './components/shoppingCart/Cart'
import Translate from './components/Translate'
import TodoList from './components/todo/TodoList'
import Youtube from './components/youtube/Youtube'

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light mb-5">
        <span class="navbar-brand">REACT-WIDGETS</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/">
              TODO
            </Link>
            <Link class="nav-item nav-link" to="/cart">
              SHOPPING CART
            </Link>
            <Link class="nav-item nav-link" to="/translate">
              TRANSLATE
            </Link>
            <Link class="nav-item nav-link" to="/youtube-search">
              YOUTUBE SEARCH
            </Link>
            <Link class="nav-item nav-link" to="/wiki-search">
              WIKI SEARCH
            </Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
        <Route path="/youtube-search">
          <Youtube />
        </Route>
        <Route path="/wiki-search">
          <Search />
        </Route>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
