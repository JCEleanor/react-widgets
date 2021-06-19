import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'

const Translate = () => {
  const options = [
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
      <div class="ui form container">
        <div class="field">
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
    </div>
  )
}

export default Translate
