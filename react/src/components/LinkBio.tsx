import React from 'react'
import ButtonLink from './ButtonLink'
import { links } from '../data/content'
import headerImage from '../assets/header.png'

export default function LinkBio() {
  const social = links.filter(l => l.social)
  return (
    <div className="page-background min-h-screen flex items-center justify-center bg-center bg-cover p-6">
      <div className="w-full max-w-md rounded-2xl overflow-hidden bg-black/60 card-custom">
        <div className="relative header">
          <img src={headerImage} alt="Logo de Transporte Castoya" className="w-full object-contain header-img" />
          <div className="overlay text-center">
            <h5 className="text-castoya-green font-bold text-2xl">TRANSPORTE CASTOYA</h5>
            <small className="text-white/90 block">Servicio de transporte</small>
            <div className="flex justify-center gap-3 mt-3">
              {social.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="text-white text-2xl hover:scale-110 transition">
                  <i className={`bi ${s.icon || ''}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 links flex flex-col gap-3">
          {links.map(l => <ButtonLink key={l.label} link={l} />)}
        </div>
      </div>
    </div>
  )
}
