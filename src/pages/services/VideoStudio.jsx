import ServicePage from '../../components/ServicePage.jsx'
import { services } from '../../content.js'

export default function VideoStudio() {
  return <ServicePage data={services.video} extraImage="/images/feature-video.jpg" />
}
