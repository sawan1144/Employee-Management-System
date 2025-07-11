import React from 'react'

const Header = ({data}) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-center justify-between py-10'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-bold'>{data.firstName}👋🏻</span></h1>
        <button onClick={logOutUser} className='bg-[#EF4444] px-5 py-2 font-medium rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header