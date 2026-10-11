import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'

const LABELS = {
  about: 'About',
  contact: 'Contact',
  terms: 'Terms & Conditions',
  privacy: 'Privacy Policy',
  services: 'Services',
  'video-studio': 'Video Studio',
  'image-studio': 'Image Studio',
  templates: 'Templates',
}

export default function Breadcrumbs({ className = '' }) {
  const location = useLocation()
  const navigate = useNavigate()
  const parts = location.pathname.split('/').filter(Boolean)

  const crumbs = [{ to: '/', label: 'Home' }]
  let acc = ''
  parts.forEach((part) => {
    acc += `/${part}`
    crumbs.push({
      to: part === 'services' ? null : acc,
      label: LABELS[part] || part,
    })
  })

  function goBack() {
    const idx = window.history.state?.idx
    if (typeof idx === 'number' && idx > 0) navigate(-1)
    else navigate('/')
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={goBack}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:border-mint/50 hover:bg-mint/10"
      >
        <ArrowLeft size={14} />
        Back
      </button>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-mute">
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1
          return (
            <span key={`${crumb.label}-${i}`} className="inline-flex items-center gap-1">
              {i > 0 && <ChevronRight size={12} className="text-white/30" />}
              {last || !crumb.to ? (
                <span className={last ? 'font-medium text-white' : ''}>{crumb.label}</span>
              ) : (
                <Link to={crumb.to} className="transition hover:text-mint">
                  {crumb.label}
                </Link>
              )}
            </span>
          )
        })}
      </nav>
    </div>
  )
}
