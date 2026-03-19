import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import "../../styles/contact.css"

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <Container>
        <div className="contact-content">
          <h2>¿Hablamos?</h2>
          <p>
            Estoy abierto a oportunidades laborales y colaboraciones profesionales.
  Si te interesa mi perfil o alguno de mis proyectos, conversemos.
          </p>
          <p className="contact-availability">
  📍 Disponible para trabajo remoto
</p>


          <div className="contact-actions">
          <Button href="mailto:pesantez.dev@outlook.com" variant="primary">
             📩 Enviarme un email
          </Button>
          <Button href="https://wa.me/56940793616" variant="outline">
            💬 WhatsApp
          </Button>
          </div>
        </div>
      </Container>      
    </section>
  )
}
