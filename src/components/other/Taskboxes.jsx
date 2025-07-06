import React from 'react'

const Taskboxes = () => {
  return (
    <div className='flex gap-8.5 w-screen py-10'>
        <div className='bg-[#3b5b8f] w-[22%] px-8 py-5 rounded-xl'>
            <h1 className='text-5xl font-bold'>0</h1>
            <h2 className='text-3xl font-medium mt-5'>New Task</h2>
        </div>
        <div className='bg-[#8c7a34] w-[22%] px-8 py-5 rounded-xl'>
            <h1 className='text-5xl font-bold'>0</h1>
            <h2 className='text-3xl font-medium mt-5'>Accepted Task</h2>
        </div>
        <div className='bg-[#2c854d] w-[22%] px-8 py-5 rounded-xl'>
            <h1 className='text-5xl font-bold'>0</h1>
            <h2 className='text-3xl font-medium mt-5'>Completed Task</h2>
        </div>
        <div className='bg-[#7a2828] w-[22%] px-8 py-5 rounded-xl'>
            <h1 className='text-5xl font-bold'>0</h1>
            <h2 className='text-3xl font-medium mt-5'>Failed Task</h2>
        </div>
    </div>
  )
}

export default Taskboxes