import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) return <div>please login</div>

    return <div>welcome to my web {user}</div>
}

export default Profile