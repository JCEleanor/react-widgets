import React, { useEffect } from 'react'
import axios from 'axios'
//KEY only allows request from localhost:3000
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, input }) => {
  useEffect(() => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: input,
          target: language.value,
          key: KEY,
        },
      }
    )
  }, [language, input])
  return <div></div>
}

export default Convert
