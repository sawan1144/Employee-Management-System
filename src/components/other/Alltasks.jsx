import React, { useContext } from 'react'
import { Authcontext } from '../../context/Contextprovider'

const Alltasks = () => {

    const authData = useContext(Authcontext)

    return (
        <div id='alltask' className='bg-[#595973] py-4 pt-6 px-3 rounded mt-5'>

            <div className='text-white text-xl font-medium mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5'>Employee</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h3 className='w-1/5'>Active Task</h3>
                <h5 className='w-1/5'>Completed Task</h5>
                <h5 className='w-1/5'>Failed Task</h5>
            </div>

            {authData.employees.map((elem, idx) => {

                return <div key={idx} className='bg-[#343443] mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 text-lg'>{elem.firstName}</h2>
                    <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.new}</h3>
                    <h5 className='w-1/5 text-lg font-medium'>{elem.taskCount.active}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-emerald-500'>{elem.taskCount.completed}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-shadow-red-700'>{elem.taskCount.failed}</h5>
                </div>
            })}

        </div>
    )
}

export default Alltasks