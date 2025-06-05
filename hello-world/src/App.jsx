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
      <h1 className="app-title">КомКом - интернет-магазин</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="item">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  )
}
