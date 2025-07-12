import Alltasks from '../other/Alltasks'
import Header from '../other/Header'
import Taskform from '../other/Taskform'

const AdminDashboard = () => {
    return (
        <div className='px-10 h-full w-full bg-[#1A1A1D] pb-5'>
            <Header />
            <Taskform />
            <Alltasks />
        </div>
    )
}

export default AdminDashboard