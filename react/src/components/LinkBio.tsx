import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ButtonLink from './ButtonLink'
import { links } from '../data/content'

export default function LinkBio() {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const motion = gsap.matchMedia()

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.bio-service-banner',
        { scale: .9, y: 20 },
        { scale: 1, y: 0, duration: .75, ease: 'power3.out' },
      )

      gsap.fromTo(
        '.bio-link',
        { scale: .96, y: 20 },
        { scale: 1, y: 0, duration: .5, stagger: .055, delay: .12, ease: 'power3.out' },
      )
    })

    return () => motion.revert()
  }, { scope: pageRef })

  return (
    <div className="bio-page" ref={pageRef}>
      <main className="bio-card">
        <img
          src={`${import.meta.env.BASE_URL}principal-castoya.jpg`}
          alt="Servicio de transporte Castoya: mudanzas y traslados con camión, camioneta y vagoneta"
          className="bio-service-banner"
        />

        <nav className="bio-links" aria-label="Enlaces de Transporte Castoya">
          {links.map(l => <ButtonLink key={l.label} link={l} />)}
        </nav>
      </main>

      <div className="bio-marquee" aria-hidden="true">
        <div className="bio-marquee__track">
          <span>Transporte Castoya</span><span>Mudanzas</span><span>Traslados</span>
          <span>Transporte Castoya</span><span>Mudanzas</span><span>Traslados</span>
        </div>
      </div>
    </div>
  )
}
