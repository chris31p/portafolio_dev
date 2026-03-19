import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'greenmarket',
    title: 'GreenMarket – E-Commerce Platform',
    description:
      'Plataforma Fullstack para la compra de canastas de alimentos saludables en Chile. Incluye carrito de compras, pagos en línea, autenticación y panel de administración.',
    image:
      'https://res.cloudinary.com/ducbaboi4/image/upload/v1766003862/Green_Market_o63nxg.png',

    backend: ['Node.js', 'Express'],
    database: ['MongoDB'],
    frontend: ['React', 'CSS'],
    auth: ['JWT'],
    other: ['Stripe'],

    demoUrl: 'https://apigreenmarket.netlify.app/',
    repoUrl: 'https://github.com/chris31p/backend_AppECommerce'
  },
  {
    id: 'smarthydro',
    title: 'Rediseño Ikolu App – Smart Hydro',
    description:
      'Rediseño de la aplicación de Smart Hydro, startup enfocada en el monitoreo y gestión del agua. Integración completa entre frontend y backend, asegurando eficiencia y cumplimiento normativo en Chile.',
    image:
      'https://res.cloudinary.com/ducbaboi4/image/upload/v1765981135/Redise%C3%B1o_SmartHydro_hxbey2.jpg',

    backend: ['Node.js', 'Express'],
    database: ['SQLite'],
    frontend: ['React', 'TypeScript'],

    demoUrl: 'https://www.demostracion.smarthydro.cl/',
    repoUrl:
      'https://github.com/felipebarraza6/techxdc_prototype_backend'
  },
  {
    id: 'scalalearning',
    title: 'Plataforma Scala Learning (MVP)',
    description:
      'Desarrollo de un MVP para la gestión integral de operaciones de Scala Learning: control documental, dashboard administrativo y sistema de roles y accesos.',
    image:
      'https://res.cloudinary.com/ducbaboi4/image/upload/v1765981135/ScalaLearning_snzsc1.jpg',

    backend: ['Node.js', 'Express'],
    database: ['MongoDB Atlas'],
    frontend: ['React', 'TypeScript'],
    auth: ['JWT'],

    demoUrl: 'https://scalalearning.vercel.app/',
    repoUrl: 'https://github.com/diazarm/TechXcelerators_6/tree/main/back'
  }
]
