import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TeamPage from './pages/TeamPage'
import ProjectsPage from './pages/ProjectsPage'

const router = createBrowserRouter([
  { path: '/',         element: <Home /> },
  { path: '/team',     element: <TeamPage /> },
  { path: '/projects', element: <ProjectsPage /> },
])

export default router
