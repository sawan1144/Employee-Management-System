import React, { createContext, useEffect, useState } from 'react'
export const Authcontext = createContext();
import getLocalStorage from '../utils/LocalStorage'

const Contextprovider = ({children}) => {

  const [userdata, setUserdata] = useState(null)

  useEffect(() => {
    const {employees, admin} = getLocalStorage()
    setUserdata({employees, admin})
  }, [])
  

  return (
    <div>
      <Authcontext.Provider value={userdata}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default Contextprovider