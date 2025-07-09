import Header from "../other/Header"
import Taskboxes from "../other/Taskboxes"
import Tasklist from "../tasklist/Tasklist"


const EmployeeDashboard = ({data}) => {
  return (
    <div className="bg-[#1A1A1D] h-screen px-10 overflow-x-hidden">
        <Header data={data} />
        <Taskboxes data={data} />
        <Tasklist data={data} />
    </div>
  )
}

export default EmployeeDashboard