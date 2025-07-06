import React from 'react'

const Taskform = () => {
    return (
        <div>
            <form className='flex items-center justify-center gap-[25vw]'>
                <div className=''>
                    <h3>Task Title</h3>
                    <input className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Enter task title' />
                    <h3>Date</h3>
                    <input className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="date" />
                    <h3>Assign To</h3>
                    <input className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Employee Name' />
                    <h3>Category</h3>
                    <input className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Design, Dev, etc.' />
                </div>
                <div className='flex flex-col'>
                    <h3>Description</h3>
                    <textarea rows='9' cols='70' className='bg-[#222736] mb-8 mt-2 border-1 rounded-xl'></textarea>
                    <button className='bg-blue-500 p-3 rounded-xl font-semibold'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default Taskform