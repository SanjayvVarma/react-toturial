import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-2xl text-center py-3'>User : {userid}</div>
  )
}

export default User