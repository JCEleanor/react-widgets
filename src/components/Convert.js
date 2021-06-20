import React, { useEffect, useState } from 'react'
import axios from 'axios'
//KEY only allows request from localhost:3000
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, input }) => {
  const [translateResult, setTranslateResult] = useState('')
  const [deboucedInput, setDebouncedInput] = useState(input)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInput(input)
    }, 500)
    return () => {
      clearTimeout(timerId)
    }
  }, [input])
  useEffect(() => {
    const translateInput = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: deboucedInput,
              target: language.value,
              key: KEY,
            },
          }
        )
        setTranslateResult(data.data.translations[0].translatedText)
      } catch (e) {
        setTranslateResult(e.message)
      }
    }
    translateInput()
  }, [language, deboucedInput])
  const result = translateResult || 'Your result will be here...'
  return (
    <div>
      <p className="ui header" style={{ textAlign: 'center' }}>
        {result}
      </p>
    </div>
  )
}

export default Convert
