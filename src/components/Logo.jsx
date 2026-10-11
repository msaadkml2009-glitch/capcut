import { Link } from 'react-router-dom'
import { brand } from '../content.js'

export function CapCutMark({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="48" height="48" rx="12" className="fill-[#111114] transition group-hover:fill-mint" />
      <path
        fill="#fff"
        className="transition group-hover:fill-ink"
        d="M10.6 15.4c0-3.15 2.55-5.7 5.7-5.7h11.4c3.15 0 5.7 2.55 5.7 5.7 0 1.52-.6 2.9-1.57 3.93L24 27.2 12.17 19.33A5.67 5.67 0 0 1 10.6 15.4zm0 17.2c0 3.15 2.55 5.7 5.7 5.7h11.4c3.15 0 5.7-2.55 5.7-5.7 0-1.52-.6-2.9-1.57-3.93L24 20.8 12.17 28.67A5.67 5.67 0 0 0 10.6 32.6z"
      />
      <path
        fill="#fff"
        className="transition group-hover:fill-ink"
        d="M29.2 8.2 41.4 17.4l-3.1 4.1-12.2-9.2 3.1-4.1zM16.8 26.5l12.2 9.2-3.1 4.1-12.2-9.2 3.1-4.1z"
      />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={brand.name}>
      <CapCutMark />
      <span className="font-display text-[17px] font-bold tracking-tight text-white">
        Cap<span className="text-mint">Cut</span>
      </span>
    </Link>
  )
}
