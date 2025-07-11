import React from 'react'

const Failedtask = ({data}) => {
    return (
        <div className='w-[23%] h-full rounded-2xl shrink-0 bg-[#343443] p-6'>
            <div className='flex justify-between'>
                <h3 className='bg-[#d13c3c] px-3 rounded-lg font-medium'>{data.category}</h3>
                <h3 className='font-medium'>{data.date}</h3>
            </div>
            <h1 className='text-3xl font-semibold mt-8'>{data.title}</h1>
            <p className='mt-3'>{data.description}</p>
            <div className='mt-4 flex justify-center'>
                <button className='w-50 py-1 rounded font-medium bg-neutral-600'>Delete</button>
            </div>
        </div>
    )
}

export default Failedtask