import { Link, NavLink } from 'react-router-dom'
import './sidenav.style.css'
import logo from '../../assets/cwbclub.svg'
import {  FaHome,FaBloggerB } from 'react-icons/fa'
import { IoIosPeople} from 'react-icons/io'
import { BsBook} from 'react-icons/bs'
import { HiOutlineCollection} from 'react-icons/hi'

import { MdLogin } from 'react-icons/md'

export default function Sidenav() {
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
          <IoIosPeople />
          Members
        </NavLink>
        <NavLink to="guides" end={true}>
          <BsBook/>
          Guides
        </NavLink>
        <NavLink to="projects" end={true}>
          <HiOutlineCollection /> Projects
        </NavLink>
        <NavLink to="blogs" end={true}>
          <FaBloggerB  /> Blogs
        </NavLink>
      </div>
      <div className="bottomDiv">
        <Link to="login" className="loginBtn">
          Login <MdLogin />
        </Link>
      </div>
    </nav>
  )
}
