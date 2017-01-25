import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'dashboard',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/FileSingle').default(store),
      ])
    })
  },

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/DashboardContainer').default
      const reducer = require('./modules/dashboard').default
      injectReducer(store, { key: 'project', reducer })
      cb(null, Counter)
    }, 'dashboard')
  }
})
