import ButtonLink from './ButtonLink'
import { links } from '../data/content'
import headerImage from '../assets/header.png'

export default function LinkBio() {
  return (
    <div className="bio-page">
      <main className="bio-card">
        <header className="bio-header">
          <img src={headerImage} alt="Logo de Transporte Castoya" className="bio-logo" />
          <h1>Transporte Castoya</h1>
          <p>Servicio de transporte</p>
        </header>

        <img
          src={`${import.meta.env.BASE_URL}principal-castoya.jpg`}
          alt="Servicio de transporte Castoya: mudanzas y traslados con camión, camioneta y vagoneta"
          className="bio-service-banner"
        />

        <div className="bio-links">
          {links.map(l => <ButtonLink key={l.label} link={l} />)}
        </div>
      </main>
    </div>
  )
}
