import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'smarthydro',
    title: 'Rediseño Ikolu App – Smart Hydro',
    description:
      'Rediseñar la aplicación Ikolu, un sistema de monitoreo de datos hídricos, orientado a la recolección, procesamiento y exposición de información en tiempo real desde múltiples fuentes. Implementé una API REST con Node.js y Express, estructurada en capas, integrando SQLite fácil de respaldar y versionar datos junto con Sequelize un ORM que nos permitió migrar a PostgreSQL. Participé en la organización del proyecto bajo buenas prácticas de arquitectura backend, facilitando la colaboración con otros equipos y la evolución del sistema.',
    image:
    'https://res.cloudinary.com/ducbaboi4/image/upload/v1765981135/Redise%C3%B1o_SmartHydro_hxbey2.jpg',
    role: 'Desarrollador Backend',
    backend: ['Node.js', 'Express'],
    database: ['SQLite', 'PostgreSQL'],
    frontend: ['React', 'TypeScript'],

    demoUrl: 'https://www.demostracion.smarthydro.cl/',
    repoUrl:
      'https://github.com/felipebarraza6/techxdc_prototype_backend'
  },
  {
    id: 'greenmarket',
    title: 'GreenMarket – E-Commerce Platform',
    description:
      'Desarrollar una plataforma de comercio electrónico para la venta de alimentos; con gestión de usuarios, productos y órdenes. Incorporé autenticación y control de acceso basado en roles (cliente y administrador). Implementé un sistema de recuperación de contraseña mediante generación de códigos temporales enviados por correo (Gmail), mejorando la seguridad y experiencia de usuario. Participé tanto en el desarrollo del backend como del frontend, integrando la aplicación completa y el panel de administración.',
    image:
      'https://res.cloudinary.com/ducbaboi4/image/upload/v1766003862/Green_Market_o63nxg.png',
    role: 'Desarrollador Fullstack',
    backend: ['Node.js', 'Express'],
    database: ['MongoDB'],
    frontend: ['React', 'CSS'],
    auth: ['JWT'],
    other: ['Stripe'],

    demoUrl: 'https://apigreenmarket.netlify.app/',
    repoUrl: 'https://github.com/chris31p/backend_AppECommerce'
  },
  {
    id: 'scalalearning',
    title: 'Plataforma Scala Learning (MVP)',
    description:
      'Desarrollar un MVP para la gestión integral de operaciones de Scala Learning: control documental, dashboard administrativo y sistema de roles y accesos. Implementé endpoints REST con TypeScript y Express, enfocados en la organización del código y separación de responsabilidades, facilitando la integración entre equipos. Como team leader trabajé bajo un enfoque de buenas prácticas en estructuración de proyectos y mantenimiento de código escalable.',
    image:
      'https://res.cloudinary.com/ducbaboi4/image/upload/v1765981135/ScalaLearning_snzsc1.jpg',
    role: 'Team Leader & Desarrollador Backend',
    backend: ['Node.js', 'Express'],
    database: ['MongoDB Atlas'],
    frontend: ['React', 'TypeScript'],
    auth: ['JWT'],

    demoUrl: 'https://scalalearning.vercel.app/',
    repoUrl: 'https://github.com/diazarm/TechXcelerators_6/tree/main/back'
  }
]
