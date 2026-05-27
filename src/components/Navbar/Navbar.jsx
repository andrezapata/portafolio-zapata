import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#habilidades', label: 'Tech Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  const renderLinks = () => {
    return links.map((link) => {
      const isActive = activeLink === link.href
      const cls = isActive ? 'nav-link-item active' : 'nav-link-item'
      return (
        <li key={link.href}>
          <a href={link.href} className={cls} onClick={() => handleClick(link.href)}>
            {link.label}
          </a>
        </li>
      )
    })
  }

  const navClass = scrolled ? 'navbar-custom scrolled' : 'navbar-custom'
  const ulClass = menuOpen ? 'navbar-links open' : 'navbar-links'
  const btnClass = menuOpen ? 'hamburger is-open' : 'hamburger'

  return (
    <nav className={navClass}>
      <div className="navbar-inner container-xl">
        <a href="#home" className="navbar-logo" onClick={() => handleClick('#home')}>
          <span className="logo-first">Andre</span>
          <span className="logo-last"> Zapata</span>
        </a>
        <ul className={ulClass}>
          {renderLinks()}
        </ul>
        <a href="#contacto" className="btn-primary-custom navbar-cta d-none d-lg-flex">
          Contratar
        </a>
        <button className={btnClass} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}