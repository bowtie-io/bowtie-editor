import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : '/project/:id/*',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const File = require('./containers/FileContainer').default
      const reducer = require('./modules/file').default
      injectReducer(store, { key: 'file', reducer })
      cb(null, File)
    }, 'file')
  }
})

