import { memo, useMemo } from 'react'

import { socialMedia } from '../data/links'

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear().toString(), [])

  return (
    <footer className="footer">
      <nav>
        <ul className="footer__media">
          <li>
            <a
              href={socialMedia.twitter}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-twitter" />
            </a>
          </li>

          {/* <li>
            <a href={socialMedia.facebook} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-facebook" />
            </a>
          </li> */}

          {/* <li>
            <a href={socialMedia.instagram} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-instagram" />
            </a>
          </li> */}

          <li>
            <a
              href={socialMedia.linkedIn}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-linkedin" />
            </a>
          </li>

          {/* <li>
            <a href={socialMedia.dribbble} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-dribbble" />
            </a>
          </li> */}

          <li>
            <a
              href={socialMedia.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-github" />
            </a>
          </li>

          <li>
            <a
              href={socialMedia.codepen}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="fab fa-codepen" />
            </a>
          </li>

          {/* <li>
            <a href={socialMedia.angellist} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-angellist" />
            </a>
          </li> */}

          {/* <li>
            <a href={socialMedia.stackoverflow} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-stack-overflow" />
            </a>
          </li> */}
        </ul>
      </nav>

      <small className="footer__copy">
        Copyright &copy; <span>{currentYear}</span> Alex Devero
      </small>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
