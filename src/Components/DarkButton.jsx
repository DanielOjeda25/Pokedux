import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const DarkButton = () => {

  const [theme, setTheme] = useState(null)

 
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
      className='fixed z-10 right-3 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-all duration-150'>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className='w-5 h-5' />
      ) : (
        <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
      )}
    </button>
  )
}
export default DarkButton
