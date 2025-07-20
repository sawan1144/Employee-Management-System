import { useState } from "react";


const Taskform = () => {

    const [tasktitle, setTasktitle] = useState('');
    const [date, setDate] = useState('');
    const [assignto, setAssignto] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        
    }

    return (
        <div onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <form className='flex items-center justify-center gap-[25vw]'>
                <div className=''>
                    <h3>Task Title</h3>
                    <input 
                    value={tasktitle}
                    onChange={(e)=>{
                        setTasktitle(e.target.value)
                    }}
                    className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Enter task title' />
                    <h3>Date</h3>
                    <input 
                    value={date}
                    onChange={(e)=>{
                        setDate(e.target.value)
                    }}
                    className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="date" />
                    <h3>Assign To</h3>
                    <input 
                    value={assignto}
                    onChange={(e)=>{
                        setAssignto(e.target.value)
                    }}
                    className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Employee Name' />
                    <h3>Category</h3>
                    <input
                    value={category} 
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    className='mt-2 mb-4 bg-[#222736] p-2 rounded-xl w-[30vw] border-1' type="text" placeholder='Design, Dev, etc.' />
                </div>
                <div className='flex flex-col'>
                    <h3>Description</h3>
                    <textarea 
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    rows='8' cols='65' className='bg-[#222736] mb-8 mt-2 border-1 rounded-xl p-5'></textarea>
                    <button className='bg-blue-500 p-3 rounded-xl font-semibold'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default Taskform