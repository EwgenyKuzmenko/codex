import './App.css'
import Nav from './Nav.jsx'
import { Link } from 'react-router-dom'
import { phones } from './phones'

export default function Phones() {
  return (
    <div>
      <Nav />

      <section className="hero modern-hero">
        <div className="hero-content">
          <h1>Телефоны</h1>
          <p>Современные смартфоны на любой вкус</p>
        </div>
      </section>

      <h2 className="app-title">Телефоны</h2>
      <div className="grid">
        {phones.map((p) => (
          <Link key={p.id} to={`/phones/${p.id}`} className="item">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} ₽</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
