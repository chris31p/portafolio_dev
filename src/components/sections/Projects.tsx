import { projects } from '../../utils/projects'
import { Container } from '../ui/Container'
import { ProjectCard } from './ProjectCard'
import '../../styles/projects.css'

export const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <Container>
        <h2>Proyectos destacados</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
