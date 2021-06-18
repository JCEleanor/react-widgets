import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResult] = useState([])
  console.log(results)
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      })
      setResult(data.query.search)
    }
    term && search()
  }, [term])
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
