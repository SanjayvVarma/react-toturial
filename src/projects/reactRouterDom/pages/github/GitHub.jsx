import React, { useEffect, useState } from 'react'

const GitHub = () => {


  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SanjayvVarma');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h1>User Name: {data ? data.login : 'Loading...'}</h1>
      <h2>Followers: {data ? data.followers : 'Loading...'}</h2>
      <img className='rounded-full' src={data ? data.avatar_url : ''} alt="User Avatar" />
    </div>
  </>
  )
}

export default GitHub;