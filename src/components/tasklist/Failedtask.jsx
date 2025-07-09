import React from 'react'

const Failedtask = () => {
    return (
        <div className='w-[23%] h-full rounded-2xl shrink-0 bg-[#343443] p-6'>
            <div className='flex justify-between'>
                <h3 className='bg-[#d13c3c] px-3 rounded-lg font-medium'>High</h3>
                <h3 className='font-medium'>20 Feb 2024</h3>
            </div>
            <h1 className='text-3xl font-semibold mt-8'>Yo le Task no.1</h1>
            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quasi! Accusamus quisquam dolorem maxime quas?</p>
            <div className='mt-4 flex justify-center'>
                <button className='w-50 py-1 rounded font-medium bg-neutral-600'>Delete</button>
            </div>
        </div>
    )
}

export default Failedtask