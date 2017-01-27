import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'project/:id',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/ProjectContainer').default
      const reducer = require('./modules/project').default
      injectReducer(store, { key: 'project', reducer })
      cb(null, Counter)
    }, 'project')
  }
})
