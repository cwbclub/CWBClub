import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { auth } from '../lib/firebase'

export default function useLogout() {
  const logout = async () => {
    const id = toast.loading(<b>Signing out...</b>)
    try {
      await signOut(auth)
      console.log('Signed out')
      toast.success(<b>Signed out</b>, { id })
    } catch (error) {
      console.log(error.message)
      toast.error(<b>{error.message}</b>, { id })
    }
  }

  return { logout }
}
