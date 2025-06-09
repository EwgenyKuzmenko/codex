import './App.css'
import Nav from './Nav.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Nav />

      <section className="hero modern-hero">
        <div className="hero-content">
          <h1>Современная электроника</h1>
          <p>Найдите устройство мечты от телевизора до смартфона</p>
          <Link to="/tvs" className="cta-button">К товарам</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://source.unsplash.com/featured/400x300?tv" alt="Телевизоры" />
          <h3>Телевизоры</h3>
          <Link to="/tvs" className="cta-button small">Подробнее</Link>
        </div>
        <div className="feature-card">
          <img src="https://source.unsplash.com/featured/400x300?phone" alt="Телефоны" />
          <h3>Телефоны</h3>
          <Link to="/phones" className="cta-button small">Подробнее</Link>
        </div>
      </section>
    </div>
  )
}
