import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/react-widgets/youtube-search" className="item">
        Youtube Search
      </Link>
      <Link href="/react-widgets/wiki-search" className="item">
        Wikipedia Search
      </Link>
      <Link href="/react-widgets/cart" className="item">
        Shopping Cart
      </Link>
      <Link href="/react-widgets/translate" className="item">
        Translate
      </Link>
      <Link href="/react-widgets/todo" className="item">
        Todo List
      </Link>
    </div>
  )
}

export default Header
