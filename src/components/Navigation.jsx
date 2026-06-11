import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#" className="nav__logo" onClick={close}>
          <span className="nav__logo-text">Pesti</span>
          <span className="nav__logo-six">6</span>
        </a>

        <ul className="nav__links">
          <li><a href="#dishes"   onClick={close}>Menu</a></li>
          <li><a href="#about"    onClick={close}>About</a></li>
          <li><a href="#reviews"  onClick={close}>Reviews</a></li>
          <li><a href="#rendeles" onClick={close}>Rendelés</a></li>
          <li><a href="#location" onClick={close}>Find us</a></li>
        </ul>

        <a href="#booking" className="nav__cta btn btn--primary" onClick={close}>
          Book a table
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="nav__drawer" aria-hidden={!open}>
        <ul>
          <li><a href="#dishes"   onClick={close}>Menu</a></li>
          <li><a href="#about"    onClick={close}>About</a></li>
          <li><a href="#reviews"  onClick={close}>Reviews</a></li>
          <li><a href="#rendeles" onClick={close}>Rendelés</a></li>
          <li><a href="#location" onClick={close}>Find us</a></li>
        </ul>
        <a href="#booking" className="btn btn--primary nav__drawer-cta" onClick={close}>
          Book a table
        </a>
      </div>
    </nav>
  )
}
