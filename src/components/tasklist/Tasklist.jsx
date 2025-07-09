import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const Tasklist = ({data}) => {
    return (
        <div id='tasklist' className='flex gap-8 h-[42%] overflow-x-auto flex-nowrap mt-5'>
            {data.tasks.map((elem)=>{
                if(elem.active){
                  return  <AcceptTask />
                }
                if(elem.new_task){
                  return  <NewTask />
                }
                if(elem.failed){
                  return  <FailedTask />
                }
                if(elem.CompleteTask){
                  return  <CompleteTask />
                }
            })}
        </div>
    )
}

export default Tasklist