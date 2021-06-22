import React, { useState } from 'react'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    props.onFormSubmit(searchTerm)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search on YouTube</label>
          <input
            onChange={onInputChange}
            value={searchTerm}
            placeholder="Korean street food"
            type="text"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
