// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import ProjectRoute from './Project'
import FileManagerRoute from './FileManager'

export const createRoutes = (store) => ({
  path        : '/',
  indexRoute  : LoginRoute,
  childRoutes : [
    {
    component   : CoreLayout,
    childRoutes : [
      ProjectRoute(store),
      FileManagerRoute(store),
    ]
  },
  {
    path        : '/callback',
  }
  ]
}
                                       )

export default createRoutes
