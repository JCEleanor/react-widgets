import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResult] = useState([])
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
