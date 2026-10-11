import { Link } from 'react-router-dom'
import { brand } from '../content.js'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={brand.name}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" className="fill-mint transition group-hover:fill-white" />
        <path d="M13 9.5L22.5 16L13 22.5V9.5Z" fill="#070708" />
        <path d="M8 23.5L24 8.5" stroke="#070708" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[17px] font-bold tracking-tight text-white">
        Nova<span className="text-mint">Cut</span>
      </span>
    </Link>
  )
}
