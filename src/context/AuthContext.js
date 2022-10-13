import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('user', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('user')
        setUser(null)
        console.log('Signing out')
      }
      setIsAuthLoading(false)
    })
    return unsubscribe
  }, [auth])

  return (
    <AuthContext.Provider value={{ user, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
