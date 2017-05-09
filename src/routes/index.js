// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import ProjectRoute from './Project'
import FileManagerRoute from './FileManager'
import OAuthCallback from '../components/OAuthCallback'

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
    path        : '/dashboard',
    component   : CoreLayout,
  },
  {
    path        : '/callback',
    component   : OAuthCallback
  }
  ]
}
)

export default createRoutes
