import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import { UserContextProvider } from './context/userContext'
import Guides from './pages/guides'
import Home from './pages/home'
import Login from './pages/login'
import Projects from './pages/projects'
import Blogs from './pages/blogs'

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}
