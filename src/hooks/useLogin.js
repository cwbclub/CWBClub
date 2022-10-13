import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'
import { createMember } from '../utils/firebase'

export default function useLogin() {
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  const providerMap = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
    facebook: new FacebookAuthProvider(),
  }

  const login = async (provider) => {
    setIsPending(true)
    const id = toast.loading(<b>Signing in please wait..</b>)
    try {
      const res = await signInWithPopup(auth, providerMap[provider])
      if (res) {
        await createMember(res.user)
        toast.success(<b>Successfully signed in</b>, {
          id,
        })
        navigate('/profile')
        setIsPending(false)
      } else {
        throw new Error('Something went wrong please try again')
      }
    } catch (error) {
      console.log(error.message)
      setIsPending(false)
      toast.error(<b>{error.message}</b>, {
        id,
      })
    }
  }
  return { login, isPending }
}
