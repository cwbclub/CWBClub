import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

const UserContext = createContext(null)

export const useUser = () => useContext(UserContext)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('user', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('user')
      }
    })
    return () => unsubscribe()
  }, [auth])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
