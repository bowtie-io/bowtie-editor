import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'project/dir/**',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Directory = require('./containers/DirectoryContainer').default
      const reducer = require('./modules/directory').default
      injectReducer(store, { key: 'directory', reducer })
      cb(null, Directory)
    }, 'directory')
  }
})

