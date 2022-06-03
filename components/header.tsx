import { memo, useCallback, useState } from 'react'
import Link from 'next/link'

const Header = memo(() => {
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)

  const generateNavClass = useCallback(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      if (window.innerWidth <= 767.99 && isMobileMenuVisible) {
        return 'nav-main--visible'
        // eslint-disable-next-line no-undef
      } else if (window.innerWidth <= 767.99 && !isMobileMenuVisible) {
        return 'nav-main--hidden'
      } else {
        return 'null'
      }
    }
  }, [isMobileMenuVisible])

  return (
    <header className="header">
      <nav className="nav-main">
        <ul className={generateNavClass()}>
          <li>
            <button className="nav__toggler nav__toggler--close" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
              <span />
              <span />
            </button>
          </li>

          <li>
            <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/"><a>Home</a></Link></span>
          </li>

          <li>
            <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/projects"><a>Projects</a></Link></span>
          </li>

          <li>
            <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/about"><a>About</a></Link></span>
          </li>

          <li>
            <a href="https://blog.alexdevero.com/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Blog</a>
          </li>

          <li>
            <a href="https://devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Devero</a>
          </li>

          {/* <li>
            <a href="https://studio.devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Studio</a>
          </li> */}

          {/* <li>
            <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/thanks"><a>Thanks</a></Link></span>
          </li> */}

          <li>
            <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/contact"><a>Contact</a></Link></span>
          </li>
        </ul>

        <button className="nav__toggler nav__toggler--toggle" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
