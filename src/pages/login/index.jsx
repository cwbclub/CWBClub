import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import useLogin from '../../hooks/useLogin'
import './login.style.css'
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa'

export default function Login() {
  const { login, isPending } = useLogin()
  const { user, isAuthLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, isAuthLoading])

  return (
    <div className="mainBody loginBody">
      <div className="loginCard">
        <h3>Join or Login to this Community</h3>
        <button disabled={isPending} onClick={() => login('google')}>
          <FaGoogle /> Signin with google
        </button>
        <button disabled={isPending} onClick={() => login('google')}>
          <FaFacebook /> Signin with facebook
        </button>
        <button disabled={isPending} onClick={() => login('google')}>
          <FaGithub /> Signin with github
        </button>
      </div>
    </div>
  )
}
