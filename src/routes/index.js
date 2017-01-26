// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import ProjectRoute from './Project'
import FileRoute from './File'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    ProjectRoute(store),
    FileRoute(store),
  ]
})

export default createRoutes
