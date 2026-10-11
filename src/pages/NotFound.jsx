import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs.jsx'

export default function NotFound() {
  return (
    <section className="mesh flex min-h-[80vh] flex-col items-center justify-center px-5 pt-28 text-center">
      <Breadcrumbs className="mb-8 justify-center" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">404</p>
      <h1 className="font-display mt-3 text-4xl font-extrabold text-white md:text-6xl">This cut is missing.</h1>
      <p className="mt-4 max-w-md text-mute">The page you want is not on the timeline. Head back home.</p>
      <Link to="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  )
}
