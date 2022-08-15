import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { DarkButton as Db } from '../styles'

const DarkButton = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button
      type='button'
      onClick={handleThemeSwitch}
      className={`${Db.button}`}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className={`${Db.FontIcon}`}/>
      ) : (
        <FontAwesomeIcon icon={faMoon} className={`${Db.FontIcon}`}/>
      )}
    </button>
  )
}
export default DarkButton
