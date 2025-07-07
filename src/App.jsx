import AdminDashboard from './components/dashboard/AdminDashboard'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import { useState } from 'react'


const App = () => {

  const [user, setUser] = useState(null)

  const handlelogin = (email, password)=>{
      if(email == 'employee@e.com' && password == '123'){
        setUser('employee')
      }else if(email == 'admin@a.com' && password == '123'){
        setUser('admin')
      }
      else{alert('invalid credentials')}
  }


  return (
    <>
      {!user ? <Login handlelogin = {handlelogin} /> : ''}
      {user == 'employee' ? <EmployeeDashboard/> : <AdminDashboard/>}
    </>
  )
}

export default App