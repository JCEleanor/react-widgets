import React, { useEffect } from 'react'

const Convert = ({ language, input }) => {
  useEffect(() => {
    console.log('language or input change')
  }, [language, input])
  return <div></div>
}

export default Convert
