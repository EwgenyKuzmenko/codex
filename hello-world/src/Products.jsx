import { products } from './products'

export default function Products() {
  return (
    <div>
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
