export type Project = {
  id: string
  title: string
  description: string
  image: string
  role: string
  backend: string[]
  frontend?: string[]
  database?: string[]
  auth?: string[]
  other?: string[]

  demoUrl?: string
  repoUrl?: string
}