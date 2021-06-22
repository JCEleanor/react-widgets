import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/youtube-search" className="item">
        Youtube Search
      </Link>
      <Link href="/wiki-search" className="item">
        Wikipedia Search
      </Link>
      <Link href="/cart" className="item">
        Shopping Cart
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/todo" className="item">
        Todo List
      </Link>
    </div>
  )
}

export default Header
