import React, { useState, useEffect } from 'react'
import wikiSearch from '../api/wiki'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResult] = useState([])
  useEffect(() => {
    const search = async () => {
      const result = await wikiSearch(term)
      setResult(result)
    }
    const timeOutId = setTimeout(() => {
      term && search()
    }, 500)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [term])

  const renderList = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          target="_blank"
          rel="noreferrer"
        >
          Check article
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    </div>
  ))
  return (
    <>
      <div className="ui form container">
        <div className="field">
          <label>Search on Wikipedia</label>
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
      <div className="ui celled list container">
        {renderList.length ? (
          renderList
        ) : (
          <p className="ui center aligned container">
            Your result will be here...
          </p>
        )}
      </div>
    </>
  )
}

export default Search
