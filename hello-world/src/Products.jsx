import { products } from './products'
import Nav from './Nav.jsx'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <Nav />

      <section className="hero modern-hero">
        <div className="hero-content">
          <h1>Телевизоры</h1>
          <p>Широкий выбор моделей для вашего дома</p>
        </div>
      </section>

      <h2 className="app-title" id="products">Наш ассортимент</h2>
      <div className="grid">
        {products.map((p) => (
          <Link key={p.id} to={`/tvs/${p.id}`} className="item">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} ₽</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
