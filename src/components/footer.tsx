import { useMemo } from 'react'

import { footerLinks } from '@/constants/navigation'

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <footer className='py-5'>
      <nav>
        <ul className='align-center flex justify-center gap-4'>
          {footerLinks.map(link =>
            link.visible ? (
              <li key={link.path}>
                <a href={link.path} rel='noopener noreferrer' target='_blank'>
                  <span className={`fab fa-${link.title}`} />
                </a>
              </li>
            ) : null
          )}
        </ul>
      </nav>

      <p className='mt-3 text-center text-xs'>
        Copyright &copy; <span>{currentYear}</span> Alex Devero
      </p>
    </footer>
  )
}
