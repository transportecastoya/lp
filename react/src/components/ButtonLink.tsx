import { Link as LinkType } from '../types'

export default function ButtonLink({ link }: { link: LinkType }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`bio-link${link.highlight ? ' bio-link--highlight' : ''}`}
    >
      <i className={`bi ${link.icon ?? 'bi-link-45deg'}`} aria-hidden="true" />
      <span>{link.label}</span>
    </a>
  )
}
