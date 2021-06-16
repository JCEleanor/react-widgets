import React, { useState } from 'react'
const Search = () => {
    const [term, setTerm] = useState('')
    

  return (
    <div className="ui form container">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          type="text"
          className="input"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value)
          }}
        ></input>
      </div>
    </div>
  )
}

export default Search
