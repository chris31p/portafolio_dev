import { Container } from '../ui/Container';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
  <Container>
    <div className="footer-content">
      <span className="footer-name">
        © {new Date().getFullYear()} Christopher Pesantez
      </span>

      <nav className="footer-links">
        <a href="#hero">Inicio</a>
        <a href="#skills">Stack</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  </Container>
</footer>

    )
}