import React, { useState } from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'

const Translate = () => {
  const options = [
    {
      label: 'Chinese',
      value: 'zh-TW',
    },
    {
      label: 'Japanese',
      value: 'ja',
    },
    {
      label: 'Korean',
      value: 'ko',
    },
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
  ]
  const [language, setLanguage] = useState(options[0])
  const [input, setInput] = useState('')

  return (
    <div>
      <div className="ui form container">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <Convert language={language} input={input} />
    </div>
  )
}

export default Translate
