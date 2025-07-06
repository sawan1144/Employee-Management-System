import Header from "../other/Header"
import Taskboxes from "../other/Taskboxes"
import Tasklist from "../tasklist/Tasklist"


const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1A1A1D] h-screen px-10 overflow-x-hidden">
        <Header />
        <Taskboxes />
        <Tasklist />
    </div>
  )
}

export default EmployeeDashboard