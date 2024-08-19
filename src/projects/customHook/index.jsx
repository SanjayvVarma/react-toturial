import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import './custom.css'

const CustomHook = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light')

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className='container'>
            <div className={`${theme === 'light' ? '' : 'dark'}`}>
                <h1>CUSTOM HOOK</h1>

                <h3>{theme}</h3>
                <button
                    onClick={handleTheme}
                >Toggle Theme
                </button>
            </div>
        </div>
    )
}

export default CustomHook