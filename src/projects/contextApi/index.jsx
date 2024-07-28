import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './page/Login'
import Profile from './page/Profile'

const ContextApi = () => {
    return (
        <UserContextProvider>
            <h1>Right_Choice</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}

export default ContextApi