// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import ProjectRoute from './Project'
import DirectoryRoute from './Directory'
import FileManagerRoute from './FileManager'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    ProjectRoute(store),
    DirectoryRoute(store),
    FileManagerRoute(store),
  ]
})

export default createRoutes
