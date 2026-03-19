import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import '../../styles/hero.css'

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero-container">

          <div className="hero-content">
            <h1>Hola, soy <span>Christopher</span></h1>
            <h2>Desarrollador Web Fullstack</h2>
            <p>
              Desarrollo aplicaciones web robustas y escalables con Node.js y Express, aplicando arquitectura limpia y buenas prácticas.
            </p>
            <div className="hero__actions">
              <Button href='#projects'>Ver proyectos</Button>
              <Button variant="secondary" href='#contact'>Hablemos</Button>
            </div>
          </div>

          <div className="hero-image">
            <div className="glass-card" id='glassCard'>
              <img src="https://res.cloudinary.com/ducbaboi4/image/upload/v1765979329/827373_wmccvv.jpg"
                alt="Christopher Pesántez - Desarrollador FullStack" className="img" />
            </div>
          </div>

        </div>
      </Container>
    </section>

  )
}
