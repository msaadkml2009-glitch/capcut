import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav } from '../content.js'

const services = [
  { label: 'Video Studio', to: '/services/video-studio', hint: 'AI editor, captions, 4K' },
  { label: 'Image Studio', to: '/services/image-studio', hint: 'Cutouts, enhance, generate' },
  { label: 'Templates', to: '/services/templates', hint: 'Reels, ads, brand films' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDrop(false)
  }, [location.pathname])

  const mainLinks = nav.links.filter((l) => !l.to.startsWith('/services'))

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'nav-blur' : ''}`}>
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks
            .filter((l) => l.to === '/')
            .map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive ? 'text-mint' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/80 transition hover:text-white"
              aria-expanded={drop}
              onClick={() => setDrop((v) => !v)}
            >
              Product <ChevronDown size={14} className={`transition ${drop ? 'rotate-180' : ''}`} />
            </button>
            {drop && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <div className="card overflow-hidden p-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-2xl px-4 py-3 transition hover:bg-white/5"
                    >
                      <div className="text-sm font-semibold text-white">{s.label}</div>
                      <div className="text-xs text-mute">{s.hint}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainLinks
            .filter((l) => l.to !== '/')
            .map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive ? 'text-mint' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
        </nav>

        <div className="hidden lg:block">
          <Link to={nav.cta.to} className="btn-primary !px-5 !py-2.5">
            {nav.cta.label}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/" className="rounded-xl px-3 py-3 text-sm text-white/90">
              Home
            </Link>
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="rounded-xl px-3 py-3 text-sm text-white/90">
                {s.label}
                <div className="text-xs text-mute">{s.hint}</div>
              </Link>
            ))}
            {mainLinks
              .filter((l) => l.to !== '/')
              .map((l) => (
                <Link key={l.to} to={l.to} className="rounded-xl px-3 py-3 text-sm text-white/90">
                  {l.label}
                </Link>
              ))}
            <Link to={nav.cta.to} className="btn-primary mt-3">
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
