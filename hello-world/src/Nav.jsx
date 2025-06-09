import { Link } from 'react-router-dom'
import './App.css'

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/">КомКом</Link>
      <Link to="/tvs">Телевизоры</Link>
      <Link to="/phones">Телефоны</Link>
    </header>
  )
}
