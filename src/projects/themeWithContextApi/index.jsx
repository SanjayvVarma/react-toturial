import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme.js';
import ThemeBtn from './context/components/ThemeBtn.jsx';
import Card from './context/components/Card.jsx';

const ThemeSwitcher = () => {

  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }

  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    let classChange = document.querySelector('html')

    classChange.classList.remove('light', 'dark')
    classChange.classList.add(themeMode)

  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto flex justify-center mb-2">
          <h1 className=' rounded-lg text-2xl w-fit py-2 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white'>Right_Choice</h1>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default ThemeSwitcher;