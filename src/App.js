import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import AuthContextProvider from './context/AuthContext'
import Guides from './pages/guides'
import Home from './pages/home'
import Login from './pages/login'
import Projects from './pages/projects'
import Blogs from './pages/blogs'
import Members from './pages/members'
import Profile from './pages/profile'
import ProtectedRoute from './components/protectedRoute'

export default function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/guides"
            element={
              <ProtectedRoute>
                <Guides />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/members" element={<Members />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}
