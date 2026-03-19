import { Container } from "../ui/Container"
import '../../styles/about.css'

export const About = () => {
  return (
    <section id="about" className="about section">
      <Container>
        <div className="section-header">
          <h2>Conoce más sobre mi trayectoria</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Soy Desarrollador Web Fullstack con mayor enfoque en Backend, con experiencia
              desarrollando soluciones web orientadas a la escalabilidad, seguridad y
              mantenibilidad del código.
            </p>

            <p>
              He trabajado con Node.js, Express y diferentes bases de datos SQL y NoSQL,
              participando en proyectos académicos y pasantías donde apliqué buenas prácticas
              de arquitectura, control de versiones y trabajo colaborativo.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Año de Experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Tecnologías Dominadas</span>
              </div>
            </div>

          </div>
        </div>
      </Container>

    </section>
  )
}
