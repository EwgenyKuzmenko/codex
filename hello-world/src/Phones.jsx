import './App.css'

const phones = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Телефон ${i + 1}`,
  price: 20000 + i * 500,
  image: `https://source.unsplash.com/featured/300x200?phone&sig=${i}`,
}))

export default function Phones() {
  return (
    <div>
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
