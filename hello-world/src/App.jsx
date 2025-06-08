import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Products from './Products.jsx'

function Home() {
  return (
    <section className="hero">
      <h1>КомКом</h1>
      <p>Лучшие телевизоры для вашего дома</p>
      <Link to="/tvs" className="cta-button">К товарам</Link>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tvs" element={<Products />} />
    </Routes>
  )
}
