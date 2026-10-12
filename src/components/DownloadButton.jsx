import { Download } from 'lucide-react'
import { downloadUrl } from '../content.js'

export default function DownloadButton({
  className = 'btn-primary',
  label = 'Download',
  icon = true,
}) {
  return (
    <a href={downloadUrl} download className={className}>
      {icon ? <Download size={16} /> : null}
      {label}
    </a>
  )
}
