import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading'
import { useAuth } from '../../context/AuthContext'
import './guides.style.css'

export default function Guides() {
  const { user, isAuthLoading } = useAuth()

  return (
    <div className="mainBody">
      {isAuthLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="container">
            <h1 className="heading">Get All The Guidelines You Required</h1>
            <p className="desc">
              All the Guidelines for related Domains will be uploaded here . You
              can select the proper guidelines for domain of your interest .
            </p>
            <h3 className="happy">HAPPY HACKING !!!!</h3>
          </div>
        </div>
      )}
    </div>
  )
}
