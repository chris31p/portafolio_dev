import '../../styles/skills.css';

type Skill = {
  name: string;
}

const backendSkills: Skill[] = [
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'SQLite' },
  { name: 'MongoDB' },
  { name: 'Firebase' }
];
const frontendSkills: Skill[] = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Vite' },
  { name: 'CSS' },
  { name: 'Bootstrap' }
];
const toolsSkills: Skill[] = [
  { name: 'Git' },
  { name: 'Cloudinary' },
  { name: 'REST APIs' }
];

export const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container">
        <h2>Stack tecnológico</h2>
        <p className="skills__subtitle">
          Tecnologías con experiencia práctica en proyectos reales
        </p>

        <div className="skills__groups">
          <SkillGroup title="Backend (principal)" skills={backendSkills} highlight />

          <SkillGroup title="Frontend (integración)" skills={frontendSkills} />

          <SkillGroup title="Herramientas y flujo de trabajo" skills={toolsSkills} />
        </div>
      </div>
    </section>
  )
}

type SkillGroupProps = {
  title: string;
  skills: Skill[];
  highlight?: boolean;
}

const SkillGroup = ({ title, skills, highlight = false }: SkillGroupProps) => {
  return (
    <div className={`skills__group ${highlight ? 'skills__group--highlight' : ''}`}>
      <h3>{title}</h3>
      <div className="skills__list">
        {skills.map((skill) => (
          <span key={skill.name} className="skill">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}