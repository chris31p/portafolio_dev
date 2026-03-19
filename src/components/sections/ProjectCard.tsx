import type { Project } from '../../types/project'
import { Button } from '../ui/Button'
import '../../styles/projects.css'

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <article className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="project-overlay">
          <div className="project-links">
            {project.demoUrl && (
              <Button href={project.demoUrl} variant="outline">
                Demo ↗
              </Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary">
                Código ↗
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
        <p>Rol: <span className="project-role">{project.role}</span></p> 
        <Stack label="Backend" items={project.backend} highlight />
        {project.database && <Stack label="DB" items={project.database} />}
        {project.auth && <Stack label="Auth" items={project.auth} />}
        {project.frontend && <Stack label="Frontend" items={project.frontend} />}
        {project.other && <Stack label="Otros" items={project.other} />}
      </div>
    </article>
  )
}

type StackProps = {
  label: string
  items: string[]
  highlight?: boolean
}

const Stack = ({ label, items, highlight }: StackProps) => (
  <div className={`project-stack ${highlight ? 'highlight' : ''}`}>
    <span>{label}</span>
    <div className="project-tags">
      {items.map((item) => (
        <span key={item} className="project-tag">
          {item}
        </span>
      ))}
    </div>
  </div>
)
