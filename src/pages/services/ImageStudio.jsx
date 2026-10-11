import ServicePage from '../../components/ServicePage.jsx'
import { services } from '../../content.js'

export default function ImageStudio() {
  return <ServicePage data={services.image} extraImage="/images/feature-image.jpg" />
}
