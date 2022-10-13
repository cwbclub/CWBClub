import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import { getMemberData } from '../../utils/firebase'
import './profileBanner.style.css'
import { FaSignOutAlt } from 'react-icons/fa'
import ProfileBannerSkel from '../skeleton/profileBannerSkel'

export default function ProfileBanner({ user }) {
  const { logout } = useLogout()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const handleData = async () => {
    const res = await getMemberData(user.uid)
    if (res) {
      setData(res)
      setIsLoading(false)
    }
    console.count('run')
  }

  useEffect(() => {
    if (user?.uid) {
      handleData()
    }
  }, [])

  return isLoading ? (
    <ProfileBannerSkel />
  ) : (
    <div className="profileBanner">
      <img src={data.photoURL} alt="Avatar of User" />
      <div className="rightSide">
        <p className="name">{data.displayName}</p>
        <Link to="/profile">View Profile</Link>
      </div>
      <FaSignOutAlt onClick={logout} />
    </div>
  )
}
