import React from 'react'
import { Link as LinkType } from '../types'

export default function ButtonLink({ link }: { link: LinkType }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition transform ${link.highlight ? 'bg-castoya-green text-white' : 'bg-white/5 text-white'} hover:scale-[1.02]`}
    >
      <i className={`bi ${link.icon || ''}`} />
      <span>{link.label}</span>
    </a>
  )
}
