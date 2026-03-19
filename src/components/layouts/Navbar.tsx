import { Container } from '../ui/Container'
import './Navbar.css'
import { useState } from 'react';

export const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  };

 const closeMenu = (e?: React.MouseEvent) => {
  if (e?.currentTarget instanceof HTMLElement) {
    e.currentTarget.blur()
  }
  setOpen(false)
}


  return (
    <header className="navbar">
      <Container>
        <div className="navbar__container">
          <a href="#" className="navbar__logo"><span>Backend</span> Developer</a>

          <nav className={`nav ${open ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>Sobre mí</a>
            <a href="#skills" onClick={closeMenu}>Stack</a>
            <a href="#projects" onClick={closeMenu}>Proyectos</a>
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </nav>
          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </Container>
    </header>
  )
}
