import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Guides from './pages/guides'
import Home from './pages/home'
import Login from './pages/login'
import Projects from './pages/projects'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
      
      </Route>
    </Routes>
  )
}
