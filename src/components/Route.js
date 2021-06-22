import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
  const pathname =
    process.env.NODE_ENV !== 'production'
      ? window.location.pathname
      : '/react-widgets/'

  const [currentPath, setCurrentPath] = useState(pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  return window.location.pathname === path ? children : null
}

export default Route

//basename={ process.env.PUBLIC_URL }
