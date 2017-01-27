import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : '/project/:id/*',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const FileManager = require('./containers/FileManagerContainer').default
      const reducer = require('./modules/file').default
      injectReducer(store, { key: 'file', reducer })
      cb(null, FileManager)
    }, 'file')
  }
})

