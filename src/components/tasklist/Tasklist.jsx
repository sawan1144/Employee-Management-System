import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const Tasklist = ({data, idx}) => {
    return (
        <div id='tasklist' className='flex gap-8 h-[42%] overflow-x-auto flex-nowrap mt-5'>
            {data.tasks.map((elem)=>{
                if(elem.active){
                  return  <AcceptTask key={idx} />
                }
                if(elem.new_task){
                  return  <NewTask key={idx} />
                }
                if(elem.failed){
                  return  <FailedTask key={idx} />
                }
                if(elem.CompleteTask){
                  return  <CompleteTask key={idx} />
                }
            })}
        </div>
    )
}

export default Tasklist