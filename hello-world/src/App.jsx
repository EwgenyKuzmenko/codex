import './App.css'

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Телевизор ${i + 1}`,
  price: 30000 + i * 1000,
  image: `https://source.unsplash.com/featured/300x200?tv&sig=${i}`,
}))

export default function App() {
  return (
    <div>
      <section className="hero">
        <h1>КомКом</h1>
        <p>Лучшие телевизоры для вашего дома</p>
        <a href="#products" className="cta-button">К товарам</a>
      </section>

      <h2 className="app-title" id="products">Наш ассортимент</h2>
      <div className="grid">
        {products.map((p) => (
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
