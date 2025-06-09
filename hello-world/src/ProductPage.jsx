import './App.css'
import Nav from './Nav.jsx'
import { useParams } from 'react-router-dom'
import { products } from './products'
import { phones } from './phones'

export default function ProductPage({ type }) {
  const { id } = useParams()
  const data = type === 'tv' ? products : phones
  const item = data.find((p) => p.id === Number(id))

  if (!item) {
    return (
      <div>
        <Nav />
        <p>Товар не найден</p>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <div className="product-page">
        <img src={item.image} alt={item.name} />
        <div className="product-details">
          <h1>{item.name}</h1>
          <p className="price">{item.price} ₽</p>
          <p>
            Здесь будет подробное описание товара. Он просто превосходный и
            современный.
          </p>
        </div>
      </div>
    </div>
  )
}
