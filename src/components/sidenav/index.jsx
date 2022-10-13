import { Link, NavLink } from 'react-router-dom'
import './sidenav.style.css'
import logo from '../../assets/cwbclub.svg'
import {
  FaHome,
  FaBloggerB,
  FaUsers,
  FaBookReader,
  FaBookOpen,
  FaArrowRight,
  FaSignInAlt,
} from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import useLogout from '../../hooks/useLogout'
import ProfileBanner from '../profileBanner'

export default function Sidenav() {
  const { user } = useAuth()

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="logotext">
          <p>CWBClub</p>
          <span>
            Developed by{' '}
            <a
              href="https://canwebe.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              CanWeBe!
            </a>
          </span>
        </div>
      </div>
      <div className="navitems">
        <NavLink to="" end={true}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="members" end={true}>
          <FaUsers />
          Members
        </NavLink>
        <NavLink to="guides" end={true}>
          <FaBookReader />
          Guides
        </NavLink>
        <NavLink to="projects" end={true}>
          <FaBookOpen /> Projects
        </NavLink>
        <NavLink to="blogs" end={true}>
          <FaBloggerB /> Blogs
        </NavLink>
      </div>
      <div className="bottomDiv">
        {user ? (
          <ProfileBanner user={user} />
        ) : (
          <Link to="login" className="loginBtn">
            Login <FaSignInAlt />
          </Link>
        )}
      </div>
    </nav>
  )
}
