import './App.css'
import Nav from './Nav.jsx'

const phones = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Телефон ${i + 1}`,
  price: 20000 + i * 500,
  image: `https://source.unsplash.com/featured/300x200?phone&sig=${i}`,
}))

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
          <div key={p.id} className="item">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  )
}
