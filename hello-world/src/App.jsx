import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './Products.jsx'
import Phones from './Phones.jsx'
import Home from './Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tvs" element={<Products />} />
      <Route path="/phones" element={<Phones />} />
    </Routes>
  )
}
