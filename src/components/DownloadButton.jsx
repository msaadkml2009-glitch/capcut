import { Download } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function DownloadButton({
  className = 'btn-primary',
  label = 'Download',
  icon = true,
}) {
  const location = useLocation()
  const navigate = useNavigate()

  function onClick(e) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/#download')
    }
  }

  return (
    <a href="/#download" className={className} onClick={onClick}>
      {icon ? <Download size={16} /> : null}
      {label}
    </a>
  )
}
