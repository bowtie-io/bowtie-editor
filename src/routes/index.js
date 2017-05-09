// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import ProjectRoute from './Project'
import FileManagerRoute from './FileManager'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    ProjectRoute(store),
    FileManagerRoute(store),
  ]
},  {
  path        : '/callback',
  component   : CoreLayout,
})

export default createRoutes
