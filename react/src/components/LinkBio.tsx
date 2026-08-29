import { FormEvent, useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import headerImage from '../assets/header.png'
import siteEs from '../data/es.json'
import siteEn from '../data/en.json'

type Language = 'es' | 'en'

const copy = {
  es: {
    nav: ['Inicio', 'Empresa', 'Servicios', 'Cotizador', 'Contacto'], quoteCta: 'Solicitar cotización',
    hero: ['TRANSPORTE CASTOYA · LA PAZ, BOLIVIA', 'Tu carga llega', 'segura y a tiempo.', 'Mudanzas, traslados y transporte confiable para personas y empresas.', 'Cotiza tu servicio', 'Conoce nuestros servicios'],
    trust: ['Servicio confiable', 'Puntualidad', 'Cobertura en La Paz'],
    company: ['SOBRE CASTOYA', 'Un equipo cercano para mover lo que importa.', 'Somos una empresa de transporte local con atención personalizada y el compromiso de cuidar cada entrega como si fuera propia.', 'Misión', 'Brindar soluciones de transporte seguras, puntuales y accesibles.', 'Visión', 'Ser la opción de confianza para cada traslado en La Paz y Bolivia.', 'Compromiso en cada viaje'],
    services: ['LO QUE HACEMOS', 'Soluciones a la medida de tu carga.', 'Elige el servicio que necesitas y nosotros nos encargamos del resto.', 'Cotizar este servicio'],
    quote: ['COTIZADOR', 'Cuéntanos qué necesitas transportar.', 'Completa tus datos y te contactaremos para preparar una propuesta.', 'Nombre completo', 'Tu nombre', 'Teléfono', 'Servicio', 'Selecciona un servicio', 'Fecha estimada', 'Dirección de origen', '¿Desde dónde recogemos?', 'Dirección de destino', '¿A dónde lo llevamos?', 'Comentarios', 'Cuéntanos sobre tu carga...', 'Enviar solicitud'],
    benefits: ['Respuesta personalizada', 'Sin compromiso', 'Atención directa por WhatsApp'],
    contact: ['CONTACTO', 'Hablemos de tu próximo traslado.', 'Estamos listos para ayudarte a moverlo con tranquilidad.', 'Llámanos', 'Escríbenos', 'La Paz, Bolivia', 'Atención con coordinación previa.', 'Ver ubicación en Google Maps'],
    footer: 'Mudanzas · Traslados · Transporte', language: 'Idioma', theme: 'Cambiar modo de color', menu: 'Navegación principal'
  },
  en: {
    nav: ['Home', 'Company', 'Services', 'Get a quote', 'Contact'], quoteCta: 'Request a quote',
    hero: ['CASTOYA TRANSPORT · LA PAZ, BOLIVIA', 'Your cargo arrives', 'safely and on time.', 'Reliable moving, transfer and transport services for people and businesses.', 'Get a quote', 'Explore our services'],
    trust: ['Reliable service', 'On-time delivery', 'Coverage in La Paz'],
    company: ['ABOUT CASTOYA', 'A dedicated team to move what matters.', 'We are a local transport company offering personal attention and a commitment to caring for every delivery as our own.', 'Mission', 'Provide safe, punctual and accessible transport solutions.', 'Vision', 'Become the trusted choice for every move in La Paz and Bolivia.', 'Commitment on every trip'],
    services: ['WHAT WE DO', 'Solutions tailored to your cargo.', 'Choose the service you need and we will take care of the rest.', 'Quote this service'],
    quote: ['QUOTE REQUEST', 'Tell us what you need to transport.', 'Complete your details and we will contact you with a proposal.', 'Full name', 'Your name', 'Phone', 'Service', 'Select a service', 'Estimated date', 'Pickup address', 'Where should we collect it?', 'Destination address', 'Where should we deliver it?', 'Comments', 'Tell us about your cargo...', 'Send request'],
    benefits: ['Personalized response', 'No obligation', 'Direct WhatsApp support'],
    contact: ['CONTACT', 'Let’s talk about your next move.', 'We are ready to help you move it with confidence.', 'Call us', 'Email us', 'La Paz, Bolivia', 'Service by prior arrangement.', 'View location on Google Maps'],
    footer: 'Moving · Transfers · Transport', language: 'Language', theme: 'Change color mode', menu: 'Main navigation'
  }
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function LinkBioSite() {
  const [dark, setDark] = useState(() => localStorage.getItem('castoya-theme') === 'dark')
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('castoya-language') === 'en' ? 'en' : 'es')
  const [sent, setSent] = useState(false)
  const site = language === 'es' ? siteEs : siteEn
  const text = copy[language]
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }

  useEffect(() => { localStorage.setItem('castoya-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { localStorage.setItem('castoya-language', language); document.documentElement.lang = language }, [language])

  const paths = ['/', '/empresa', '/servicios', '/cotizador', '/contacto']
  const TrustStrip = () => <section className="trust-strip"><span><i className="bi bi-shield-check" /> {text.trust[0]}</span><span><i className="bi bi-clock-history" /> {text.trust[1]}</span><span><i className="bi bi-geo-alt" /> {text.trust[2]}</span></section>
  const CompanyPage = () => <main className="page-main"><section className="section company"><div className="section-kicker">{text.company[0]}</div><div className="section-heading"><h1>{text.company[1]}</h1><p>{text.company[2]}</p></div><div className="company-grid"><div className="company-card"><span className="feature-icon"><i className="bi bi-bullseye" /></span><h3>{text.company[3]}</h3><p>{text.company[4]}</p></div><div className="company-card"><span className="feature-icon"><i className="bi bi-eye" /></span><h3>{text.company[5]}</h3><p>{text.company[6]}</p></div><div className="company-card company-card--accent"><strong>100%</strong><span>{text.company[7]}</span></div></div></section></main>
  const ServicesPage = () => <main className="page-main services-page"><section className="section services"><div className="section-kicker">{text.services[0]}</div><div className="section-heading"><h1>{text.services[1]}</h1><p>{text.services[2]}</p></div><div className="service-grid">{site.services.map(service => <article className="service-card" key={service.title}><span className="feature-icon"><i className={`bi ${service.icon}`} /></span><h3>{service.title}</h3><p>{service.description}</p><Link to="/cotizador">{text.services[3]} <i className="bi bi-arrow-up-right" /></Link></article>)}</div></section></main>
  const QuotePage = () => <main className="page-main"><section className="quote-section"><div className="quote-intro"><div className="section-kicker">{text.quote[0]}</div><h1>{text.quote[1]}</h1><p>{text.quote[2]}</p><ul>{text.benefits.map(item => <li key={item}><i className="bi bi-check-circle-fill" /> {item}</li>)}</ul></div><form className="quote-form" onSubmit={submit}><div className="form-row"><label>{text.quote[3]}<input required name="name" placeholder={text.quote[4]} /></label><label>{text.quote[5]}<input required name="phone" type="tel" placeholder="+591 ..." /></label></div><div className="form-row"><label>{text.quote[6]}<select name="service" defaultValue=""><option value="" disabled>{text.quote[7]}</option>{site.quote.services.map(service => <option key={service}>{service}</option>)}</select></label><label>{text.quote[8]}<input name="date" type="date" /></label></div><div className="form-row"><label>{text.quote[9]}<input name="origin" placeholder={text.quote[10]} /></label><label>{text.quote[11]}<input name="destination" placeholder={text.quote[12]} /></label></div><label>{text.quote[13]}<textarea name="comments" rows={3} placeholder={text.quote[14]} /></label><button className="button button--blue" type="submit">{sent ? site.quote.successMessage : text.quote[15]} <i className="bi bi-send" /></button></form></section></main>
  const ContactPage = () => <main className="page-main"><section className="section contact"><div><div className="section-kicker">{text.contact[0]}</div><h1>{text.contact[1]}</h1><p>{text.contact[2]}</p><div className="contact-list"><a href={`tel:${site.contact.phone}`}><span className="feature-icon"><i className="bi bi-telephone" /></span><span><small>{text.contact[3]}</small>{site.contact.displayPhone}</span></a><a href={site.contact.whatsapp}><span className="feature-icon"><i className="bi bi-whatsapp" /></span><span><small>WhatsApp</small>{site.contact.phone}</span></a><a href={`mailto:${site.contact.email}`}><span className="feature-icon"><i className="bi bi-envelope" /></span><span><small>{text.contact[4]}</small>{site.contact.email}</span></a></div></div><div className="map-card"><i className="bi bi-geo-alt-fill" /><h3>{text.contact[5]}</h3><p>{text.contact[6]}</p><a href={site.contact.maps} target="_blank" rel="noreferrer">{text.contact[7]} <i className="bi bi-arrow-up-right" /></a></div></section></main>

  return <div className={`site ${dark ? 'site--dark' : ''}`}>
    <ScrollToTop />
    <header className="topbar"><Link className="brand" to="/"><img src={headerImage} alt={site.brand.name} /></Link><nav aria-label={text.menu}>{paths.map((path, index) => <NavLink key={path} to={path} end={path === '/'}>{text.nav[index]}</NavLink>)}</nav><div className="topbar-actions"><label className="language-select"><span className="sr-only">{text.language}</span><select value={language} onChange={event => setLanguage(event.target.value as Language)} aria-label={text.language}><option value="es">🇧🇴 ES</option><option value="en">🇺🇸 EN</option></select></label><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={text.theme}><i className={`bi ${dark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} /></button><Link className="nav-cta" to="/cotizador">{text.quoteCta}</Link></div></header>
    <Routes>
      <Route path="/" element={<main><section className="hero"><div className="hero-slides" aria-hidden="true"><div className="hero-slide hero-slide--one" /><div className="hero-slide hero-slide--two" /><div className="hero-slide hero-slide--three" /></div><div className="hero-content"><p className="eyebrow">{text.hero[0]}</p><h1>{text.hero[1]}<br /><span>{text.hero[2]}</span></h1><p className="hero-copy">{text.hero[3]}</p><div className="hero-actions"><Link className="button button--green" to="/cotizador">{text.hero[4]} <i className="bi bi-arrow-right" /></Link><Link className="button button--ghost" to="/servicios">{text.hero[5]}</Link></div></div><div className="hero-dots"><b /><b /><b /></div></section><TrustStrip /></main>} />
      <Route path="/empresa" element={<CompanyPage />} /><Route path="/servicios" element={<ServicesPage />} /><Route path="/cotizador" element={<QuotePage />} /><Route path="/contacto" element={<ContactPage />} /><Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <footer><span>© {new Date().getFullYear()} Transporte Castoya</span><span>{text.footer}</span></footer><a className="whatsapp-float" href={site.contact.whatsapp} aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
  </div>
}

export default function LinkBio() { return <BrowserRouter basename="/lp"><LinkBioSite /></BrowserRouter> }
