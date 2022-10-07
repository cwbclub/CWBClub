import { Outlet } from 'react-router-dom'
import Sidenav from '../sidenav'
import './layout.style.css'

export default function Layout() {
  return (
    <div className="layout">
      <Sidenav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
