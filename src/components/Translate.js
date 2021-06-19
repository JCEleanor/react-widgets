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

  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  )
}

export default Translate
