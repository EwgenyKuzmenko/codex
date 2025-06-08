import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Phones from './Phones.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Главная</Link> | <Link to="/phones">Телефоны</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
      </Routes>
    </BrowserRouter>
  )
}
