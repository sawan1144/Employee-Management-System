import AdminDashboard from './components/dashboard/AdminDashboard'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import { useContext, useEffect, useState } from 'react'
import { Authcontext } from './context/Contextprovider'

const App = () => 
  {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authdata = useContext(Authcontext)

  // useEffect((authdata) => {
  //   const loggedInUser = localStorage.getItem('loggedInUser')
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }
  // }, [authdata])
  

  const handlelogin = (email, password)=>{
      if(authdata){
        const employe =  authdata.employees.find((e)=>email == e.email && password == e.password)
        if (employe) {
          setUser({role: 'employee'})
          setLoggedInUserData(employe)
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
        }
      }else if(authdata && authdata.admin.find((e)=>email == e.email && password == e.password)){
        setUser({role: 'admin'})
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      }
      else{alert('invalid credentials')}
    }


  return (
    <>
      {!user ? <Login handlelogin = {handlelogin} /> : ''}
      {user?.role == 'employee' && <EmployeeDashboard data={loggedInUserData}/>}
      {user?.role == 'admin' && <AdminDashboard/>}
    </>
  )
}

export default App