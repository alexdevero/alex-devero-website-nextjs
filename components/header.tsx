import React from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuVisible, toggleMobileMenu] = React.useState(false)

  const generateNavClass = () => {
    const windowGlobal = typeof window !== 'undefined' && window

    if (windowGlobal.innerWidth <= 767.99 && isMobileMenuVisible) {
      return 'nav-main--visible'
    } else if (windowGlobal.innerWidth <= 767.99 && !isMobileMenuVisible) {
      return 'nav-main--hidden'
    } else {
      return null
    }
  }

  return <header className="header">
    <nav className="nav-main">
      <ul className={generateNavClass()}>
        <li>
          <button className="nav__toggler nav__toggler--close" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
            <span></span>
            <span></span>
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

        <li>
          <a href="https://studio.devero.io/" rel="noopener noreferrer" target="_blank" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>Studio</a>
        </li>

        <li>
          <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/thanks"><a>Thanks</a></Link></span>
        </li>

        <li>
          <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}><Link href="/contact"><a>Contact</a></Link></span>
        </li>
      </ul>

      <button className="nav__toggler nav__toggler--toggle" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
}

export default Header
