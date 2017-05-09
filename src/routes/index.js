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
    path: '/dashboard',
    component   : CoreLayout,
    indexRoute : ProjectRoute(store),
    childRoutes : [
      FileManagerRoute(store),
    ]
  },
  {
    path        : '/callback',
    component   : OAuthCallback
  }
  ]
}
)

export default createRoutes
