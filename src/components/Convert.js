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
    }
    translateInput()
  }, [language, deboucedInput])
  return (
    <div>
      <h1 className="ui header">{translateResult}</h1>
    </div>
  )
}

export default Convert
