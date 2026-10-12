import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { brand, footer } from '../content.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-elev">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-mute">{footer.blurb}</p>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to + l.label}>
                  {l.to.startsWith('http') ? (
                    <a href={l.to} className="text-sm text-mute transition hover:text-white">
                      {l.label}
                    </a>
                  ) : l.to.includes('#') ? (
                    <a href={l.to} className="text-sm text-mute transition hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-sm text-mute transition hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-1" />
      </div>
      <div className="hairline" />
      <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-6 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
        </p>
        <p className="flex gap-4">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  )
}
