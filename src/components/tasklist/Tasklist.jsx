import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const Tasklist = ({data}) => {
    return (
        <div id='tasklist' className='flex gap-8 h-[42%] overflow-x-auto flex-nowrap mt-5'>
            {data.tasks.map((elem, idx)=>{
                if(elem.active){
                  return  <AcceptTask key={idx} data={elem}/>
                }
                if(elem.new_task){
                  return  <NewTask key={idx} data={elem}/>
                }
                if(elem.failed){
                  return  <FailedTask key={idx} data={elem}/>
                }
                if(elem.CompleteTask){
                  return  <CompleteTask key={idx} data={elem}/>
                }
            })}
        </div>
    )
}

export default Tasklist