import ServicePage from '../../components/ServicePage.jsx'
import { services } from '../../content.js'

export default function Templates() {
  return <ServicePage data={services.templates} extraImage="/images/template-travel.jpg" />
}
