import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'project',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/FileSingle').default(store),
      ])
    })
  },

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/ProjectContainer').default
      const reducer = require('./modules/project').default
      injectReducer(store, { key: 'project', reducer })
      cb(null, Counter)
    }, 'project')
  }
})
